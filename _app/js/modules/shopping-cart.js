// Shopping cart inspired from 'BendikMdelp': https://github.com/bendikmdelp/Simple-restaurant-store-with-cart

/**
 * 
 * @todo
 */

export default function shoppingCart(products) {
	let cartProducts = getCartProductsFromLocalStorage();
	let productObject = {};
	
	// Queryselectors
	const addToCartButtons = document.querySelectorAll('.card__product--add--button');
	const cartListContainer = document.querySelector('.cart__products--list')
	const emptyCartButton = document.querySelector('.cart__empty--button');
	const cartTotalSum = document.querySelector('.cart__total--sum');

	if (cartListContainer) {
		renderCartHTML();
	}

	// EventListeners
	addToCartButtons.forEach(button => {
		button.addEventListener('click', handleAddToCartButtonClick);
	})

	if (emptyCartButton) {
		emptyCartButton.addEventListener('click', handleEmptyCartButtonClick);
	}

	function handleEmptyCartButtonClick() {
		localStorage.clear();
		renderCartHTML();
	}

	function handleProductRemoveButtonClick(event) {
		removeSelectedItemFromCart(event);
		renderCartHTML()
		saveToLocalStorage();
	}
	
	function removeSelectedItemFromCart(event) {
		const clickedItemIndex = event.currentTarget.dataset.index;

		cartProducts.splice(clickedItemIndex, 1);
	}

	function handleAddToCartButtonClick(event) {
		createProductObject(products, event);

		const productInCart = verifyProductInCart();
		if (!productInCart) {
			addProductToCart();
		} 
		saveToLocalStorage();
		renderCartHTML();
	}

	function saveToLocalStorage() {
		localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
	}

	function createProductObject(products, event) {
		products.forEach(product => {
			if (product.name === event.currentTarget.dataset.name) {
				productObject = {
					productName: product.name,
					productPrice: product.price,
					productImage: product.images[0],
					productQuantity: 1,
				}
			};
		})
	}
	
	// Checks if product exists in cart
	function verifyProductInCart() {
		if (cartProducts) {
			let checkIfProductExists = cartProducts.some(product => {
				return product.productName === productObject.productName;
			})
			return checkIfProductExists;
		} else {
			return false;
		}
	}

	// If product exists in cart
	function addProductToCart() {
		cartProducts.push(productObject);
	}

	function generateCartListHTML(cartStorage, cartListContainer) {
		if (cartStorage && cartListContainer) {
			cartListContainer.innerHTML = '';

			// Renders the cart list items
			cartStorage.forEach(((index, cartProduct) => {
				const productDiv = createProductItemDOMElement(cartProduct, index);
				cartListContainer.append(productDiv);
			}))
		}
	}

	function createProductItemDOMElement(index, cartProduct) {
		const productDiv = document.createElement('div');
		const imageDiv = document.createElement('div');
		const productImage = document.createElement('img');

		const productInformationDiv = document.createElement('div');
		const productTitleDiv = document.createElement('div');
		const productPriceDiv = document.createElement('div');
		const quantityDiv = document.createElement('div');
		const productRemoveButton = document.createElement('button');

		productDiv.classList.add('cart__item');
		imageDiv.classList.add('cart__item--image');
		productImage.classList.add('cart__image--source');
		productTitleDiv.classList.add('cart__item--title');
		productPriceDiv.classList.add('cart__item--price');
		quantityDiv.classList.add('cart__quantity');
		productRemoveButton.classList.add('cart__remove--button');

		productImage.setAttribute('src', cartProduct.productImage);
		productTitleDiv.textContent = cartProduct.productName;
		productPriceDiv.textContent = cartProduct.productPrice + 'kr.';
		productRemoveButton.textContent = 'Remove';
		productRemoveButton.dataset.index = index;


		if (productRemoveButton) {
			productRemoveButton.addEventListener('click', handleProductRemoveButtonClick)
		}

		productDiv.append(
			imageDiv,
			productInformationDiv
		);

		imageDiv.appendChild(productImage);
		
		productInformationDiv.append(
			productTitleDiv,
			productPriceDiv,
			productRemoveButton
		);

		return productDiv
	}

	function getCartProductsFromLocalStorage() {
		if (JSON.parse(localStorage.getItem('cartProducts'))) {
			return JSON.parse(localStorage.getItem('cartProducts'));
		} else {
			return [];
		}
	}

	function calculateSum(cartStorage) {
		const cartList = cartStorage;

		return cartList.reduce((total, cartStorage) => {
			return total + cartStorage.productPrice
		}, 0); 
	}

	function renderSum(totalSum) {
		cartTotalSum.textContent = totalSum;
	}

	function renderCartHTML() {
		generateCartListHTML(cartProducts, cartListContainer);

		const totalSum = calculateSum(cartProducts);

		renderSum(totalSum);
	}
}
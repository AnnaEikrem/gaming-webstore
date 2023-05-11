export default function shoppingCart(products) {
	let cartProductsList = [];

	const cartListContainer = document.querySelector('.cart__products--list');
	const cartTotalSum = document.querySelector('.cart__total--sum');
	const cartCheckOutButton = document.querySelector('.cart__total--checkout--button');
	const addToCartButtons = document.querySelectorAll('.card__product--add--button');

	if (addToCartButtons) {
		addToCartButtons.forEach(button => {
			  button.addEventListener('click', handleAddToCartButtonClick)
		});
	}
	
	function handleAddToCartButtonClick(button) {
		const clickedButton = button.currentTarget;
		const cardElement = clickedButton.closest('.product__preview--card');

		addItemToCart(cardElement);
		renderCart();
	}

	function addItemToCart(productData) {
		const cardData = productData.dataset;
		const product = {
			id: cardData.id,
			name: cardData.name,
			price: cardData.price,
			quantity: 1,
		};
		
		const matchInCart = cartProductsList.find(product => {
			product.id === cardData.id
		});

		if (matchInCart) {
			matchInCart.quantity += 1;
		} else {
			cartProductsList.push(product);
		}
		console.log(cardData);
	}

	function renderCart() {
		// if (cartProductsList.length > 0) {

		// }

		insertCartItem();
	}

	// function insertCartItem() {
	// 	const cartItem = document.createElement('div');
	// 	const cartItemImage = document.createElement('img');
	// 	const cartItemInformation = document.createElement('div');
	// 	const itemInformationTitle = document.createElement('div');
	// 	const itemInformationPrice = document.createElement('div');
	// 	const itemRemoveButton = document.createElement('button');

	// 	cartItem.classList.add('cart__product--item');
	// 	cartItemImage.classList.add('cart__product--image');
	// 	cartItemInformation.classList.add('cart__product--information');
	// 	itemInformationTitle.classList.add('cart__product--title');
	// 	itemInformationPrice.classList.add('cart__product--price');
	// 	itemRemoveButton.classList.add('cart__product--remove--button');

	// 	cartItemImage.setAttribute('src', `/_app/assets/Monkey.gif`)
	// 	itemInformationTitle.textContent = `Game Boy`
	// 	itemInformationPrice.textContent = `1500kr`
	// 	itemRemoveButton.textContent = `Remove`;

	// 	cartListContainer.appendChild(cartItem);
	// 	cartItem.appendChild(cartItemImage);
	// 	cartItem.appendChild(cartItemInformation);
	// 	cartItemInformation.appendChild(itemInformationTitle);
	// 	cartItemInformation.appendChild(itemInformationPrice);
	// 	cartItemInformation.appendChild(itemRemoveButton);
	// }
}
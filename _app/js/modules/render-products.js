export default function renderProductCards(products) {
	// Variables
	const allProductsContainer = document.querySelector('.list__products--all');
	const chosenProductsContainer = document.querySelector('.list__products--chosen');
	const allProductsArray = products;
	let randomProductsArray = [];

	// Renders products if containers are present
	if (allProductsContainer) {
		renderProductCardsHTML();
	}

	if (chosenProductsContainer) {
		renderChosenCardsHTML();
	}

	// Returns the product card element as a link
	function returnProductDOMElement(product) {
		const itemName = product.name;
		const imageUrl = product.productImage;
		const itemBrand = product.brand.brandName;
		const itemPrice = product.price;
		const imageAltText = product.altText;

		const cardLinkElement = document.createElement('a');
		const productImage = document.createElement('div');
		const imageElement = document.createElement('img');
		const productInformation = document.createElement('div');
		const productBrand = document.createElement('div');
		const productName = document.createElement('div');
		const productPrice = document.createElement('div');
		const exploreButton = document.createElement('button');
		
		cardLinkElement.classList.add('product__card--link');
		productImage.classList.add('product__image');
		imageElement.classList.add('product__image--source');
		productInformation.classList.add('product__information');
		productBrand.classList.add('product__information--brand');
		productName.classList.add('product__information--name');
		productPrice.classList.add('product__information--price');
		exploreButton.classList.add('product__explore--button');
		
		cardLinkElement.setAttribute('href', `/_app/product-preview/index.html?product=${product.slug}`)
		imageElement.setAttribute('src', imageUrl);
		imageElement.setAttribute('alt', imageAltText);
		productBrand.textContent = itemBrand;
		productName.textContent = itemName;
		productPrice.textContent = `${itemPrice} $`;
		exploreButton.textContent = 'Explore';

		cardLinkElement.appendChild(productImage);
		cardLinkElement.appendChild(productInformation);
		productImage.appendChild(imageElement);
		productInformation.appendChild(productBrand);
		productInformation.appendChild(productName);
		productInformation.appendChild(productPrice);
		productInformation.appendChild(exploreButton);

		return cardLinkElement
	}

	// Renders a card per product and appends to container
	function renderProductCardsHTML() {
		products.forEach(product => {
			if (allProductsContainer) {
				const productCardElement = returnProductDOMElement(product);
				allProductsContainer.appendChild(productCardElement);
			}
		})
	}

	// Renders six random products from the products array to front page
	function renderChosenCardsHTML() {
		allProductsArray.sort(() => Math.random() - 0.5);
		randomProductsArray = allProductsArray.slice(0, 6);
			
		randomProductsArray.forEach(product => {
			const productCardElement = returnProductDOMElement(product)
			chosenProductsContainer.appendChild(productCardElement)
		});
	}
}
export default function renderProductCards(products) {
	const productsContainer = document.querySelector('.product__cards--container');

	if (productsContainer) {
		renderProductCardsHTML();
	}

	function returnProductDOMElement(product) {
		const itemName = product.name;
		// const showcaseImage = product.showcaseImage;
		const itemBrand = product.brand.brandName;
		const itemPrice = product.price;

		const cardLinkElement = document.createElement('a');
		cardLinkElement.classList.add('product__card--link');

		const productImage = document.createElement('div');
		productImage.classList.add('product__image');
		// const imageUrl = document.createElement('img');
		// imageUrl.setAttribute('src', showcaseImage);

		const productInformation = document.createElement('div');
		productInformation.classList.add('product__information');

		const productBrand = document.createElement('div');
		productBrand.classList.add('product__information--brand');
		productBrand.textContent = itemBrand;

		const productName = document.createElement('div');
		productName.classList.add('product__information--name');
		productName.textContent = itemName;

		const productPrice = document.createElement('div');
		productPrice.classList.add('product__information--price');
		productPrice.textContent = itemPrice;

		const exploreButton = document.createElement('button');
		exploreButton.classList.add('product__explore--button');
		exploreButton.textContent = 'Explore';
		
		cardLinkElement.appendChild(productImage);
		cardLinkElement.appendChild(productInformation);
		// productImage.appendChild(imageUrl);
		productInformation.appendChild(productBrand);
		productInformation.appendChild(productName);
		productInformation.appendChild(productPrice);
		productInformation.appendChild(exploreButton);

		return cardLinkElement
	}


	function renderProductCardsHTML() {
		products.forEach(product => {
			const productCardElement = returnProductDOMElement(product);

			productsContainer.appendChild(productCardElement);
		})
	}
}
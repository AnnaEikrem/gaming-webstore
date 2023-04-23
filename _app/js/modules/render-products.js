export default function renderProductCards(products) {
	const productsContainer = document.querySelector('.product__cards--container');

	if (productsContainer) {
		renderProductCardsHTML();
	}

	function returnProductDOMElement(product) {
		const itemName = product.name;
		const imageUrl = product.productImage;
		const itemBrand = product.brand.brandName;
		const itemPrice = product.price;

		console.log(imageUrl)

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
		
		imageElement.setAttribute('src', imageUrl);
		productBrand.textContent = itemBrand;
		productName.textContent = itemName;
		productPrice.textContent = itemPrice;
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

	function renderProductCardsHTML() {
		products.forEach(product => {
			const productCardElement = returnProductDOMElement(product);

			productsContainer.appendChild(productCardElement);
		})
	}
}
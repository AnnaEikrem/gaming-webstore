export default function previewProduct(products) {
	const productContainer = document.querySelector('.product__preview--information');
	const currentSearchParams = new URLSearchParams(window.location.search);
	const productSlug = currentSearchParams.get('id');

	if (productContainer) {
		renderPreviewHTML(productSlug);
	}


	function returnDOMElement(product) {
		const previewCardElement = document.createElement('div');
		previewCardElement.classList.add('product__preview--card');

		const cardTopContainer = document.createElement('div');
		cardTopContainer.classList.add('product__card--top');

		const cardTopHeadline = document.createElement('h3');
		cardTopHeadline.classList.add('product__detail--name');
		cardTopHeadline.textContent = product.name;

		const cardtopImage = document.createElement('div');
		cardtopImage.classList.add('product__detail--image');
		const imageElementSource = document.createElement('img');
		imageElementSource.classList.add('product__detail--image--source');

		const cardBottomContainer = document.createElement('div');
		cardBottomContainer.classList.add('product__card--bottom');

		const cardBottomContent = document.createElement('div');
		cardBottomContent.classList.add('product__details--content');

		// Three divs with three contents. Need another solution.
		const cardBottomDetail = document.createElement('div');
		cardBottomDetail.classList.add('product__detail');

		const cardBottomDetailText = document.createElement('div');
		cardBottomDetailText.classList.add('product__detail--text');
		cardBottomDetailText.textContent = 'Price';

		const cardBottomDetailValue = document.createElement('div');
		cardBottomDetailValue.classList.add('product__detail--value');


		// Buttons
		const cardButtonsContainer = document.createElement('div');
		cardButtonsContainer.classList.add('product__card--buttons');

		const buttonQuantity = document.createElement('div');
		buttonQuantity.classList.add('card__button--quantity');
		const buttonSubtract = document.createElement('button');
		buttonSubtract.classList.add('button__quantity--subtract');
		buttonSubtract.textContent = '-'

		const buttonNumber = document.createElement('div');
		buttonNumber.classList.add('button__quantity--number');
		// buttonNumber.textContent = product.

		const buttonAdd = document.createElement('button');
		buttonAdd.classList.add('button__quantity--add');
		buttonAdd.textContent = '+'

		const buttonAddToCart = document.createElement('button');
		buttonAddToCart.classList.add('card__button--add-to-cart');
		buttonAddToCart.textContent = 'Add to cart';

		const cardDescriptionContainer = document.createElement('div');
		cardDescriptionContainer.classList.add('product__card--description');

		const descriptionHeadline = document.createElement('h4');
		descriptionHeadline.classList.add('card__description--headline');
		descriptionHeadline.textContent = 'Description';

		const descriptionText = document.createElement('article');
		descriptionText.classList.add('card__description--text');
		descriptionText.textContent = product.description;

		console.log(product.slug)

		// AppendChild to create HTML structure
		previewCardElement.appendChild(cardTopContainer);
		previewCardElement.appendChild(cardBottomContainer);
		previewCardElement.appendChild(cardButtonsContainer);
		previewCardElement.appendChild(cardDescriptionContainer);

		cardTopContainer.appendChild(cardTopHeadline);
		productImages.forEach(image => {
			const cardtopImage = document.createElement('div');
			const imageElementSource = document.createElement('img');

			cardtopImage.classList.add('product__detail--image');
			imageElementSource.classList.add('product__detail--image--source');

			imageElementSource.setAttribute('src', image);

			cardTopContainer.appendChild(cardtopImage);
			cardtopImage.appendChild(imageElementSource);
		})

		cardBottomContainer.appendChild(cardBottomContent);
		cardBottomContent.appendChild(cardBottomDetail);

		cardBottomDetail.appendChild(cardBottomDetailText);
		cardBottomDetail.appendChild(cardBottomDetailValue);
		// What to do about color?

		cardButtonsContainer.appendChild(buttonQuantity);
		cardBottomContainer.appendChild(buttonAddToCart);

		buttonQuantity.appendChild(buttonSubtract);
		buttonQuantity.appendChild(buttonNumber);
		buttonQuantity.appendChild(buttonAdd);

		cardDescriptionContainer.appendChild(descriptionHeadline);
		cardDescriptionContainer.appendChild(descriptionText);

		return previewCardElement
	}


	function renderPreviewHTML(slug) {
		const currentProduct = products.find(product => product.slug === slug);
		const currentProductClicked = returnDOMElement(currentProduct);

		productContainer.appendChild(currentProductClicked)
	};



	// console.log(products);
}
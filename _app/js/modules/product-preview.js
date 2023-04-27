export default function previewProduct(products) {
	const productContainer = document.querySelector('.product__preview--information');
	const currentSearchParams = new URLSearchParams(window.location.search);
	const productSlug = currentSearchParams.get('product');

	if (productContainer) {
		renderPreviewHTML(productSlug);
	}

	function returnDOMElement(product) {
		const productImages = product.images;
		const productPrice = product.price;
		const productBrand = product.brand.brandName;
		const productColors = product.colors;

		const previewCardElement = document.createElement('div');
		const cardTopContainer = document.createElement('div');
		const cardTopHeadline = document.createElement('h3');
		const cardBottomContainer = document.createElement('div');
		const cardBottomContent = document.createElement('div');

		const cardBottomDetail = document.createElement('div');
		const cardBottomDetailPrice = document.createElement('div');
		const cardBottomDetailBrand = document.createElement('div');
		const cardBottomDetailColors = document.createElement('div');
		const cardBottomValuePrice = document.createElement('div');
		const cardBottomValueBrand = document.createElement('div');

		const cardButtonsContainer = document.createElement('div');
		const buttonQuantity = document.createElement('div');
		const buttonSubtract = document.createElement('button');
		const buttonNumber = document.createElement('div');
		const buttonAdd = document.createElement('button');

		const buttonAddToCart = document.createElement('button');
		const cardDescriptionContainer = document.createElement('div');
		const descriptionHeadline = document.createElement('h4');
		const descriptionText = document.createElement('article');

		previewCardElement.classList.add('product__preview--card');
		cardTopContainer.classList.add('product__card--top');
		cardTopHeadline.classList.add('product__detail--name');
		cardBottomContainer.classList.add('product__card--bottom');
		cardBottomContent.classList.add('product__details--content');

		cardBottomDetail.classList.add('product__detail');
		cardBottomDetailPrice.classList.add('product__detail--text');
		cardBottomDetailPrice.classList.add('price');
		cardBottomDetailBrand.classList.add('product__detail--text');
		cardBottomDetailBrand.classList.add('brand');
		cardBottomDetailColors.classList.add('product__detail--text');
		cardBottomDetailColors.classList.add('colors');
		cardBottomValuePrice.classList.add('product__detail--value');
		cardBottomValueBrand.classList.add('product__detail--value');

		cardButtonsContainer.classList.add('product__card--buttons');
		buttonQuantity.classList.add('card__button--quantity');
		buttonSubtract.classList.add('button__quantity--subtract');
		buttonNumber.classList.add('button__quantity--number');
		buttonAdd.classList.add('button__quantity--add');

		buttonAddToCart.classList.add('card__button--add-to-cart');
		cardDescriptionContainer.classList.add('product__card--description');
		descriptionHeadline.classList.add('card__description--headline');
		descriptionText.classList.add('card__description--text');

		cardTopHeadline.textContent = product.name;
		cardBottomDetailPrice.textContent = 'Price:';
		cardBottomDetailBrand.textContent = 'Brand:';
		cardBottomDetailColors.textContent = 'Colors:';
		cardBottomValuePrice.textContent = productPrice;
		cardBottomValueBrand.textContent = productBrand;

		productColors.forEach(color => {
			const cardBottomValueColors = document.createElement('div');
			const colorCode = color.colorCode;

			cardBottomValueColors.classList.add('product__detail--color--code');
			cardBottomValueColors.classList.add('product__detail--value');
			cardBottomValueColors.style.background = colorCode;

			cardBottomDetailColors.appendChild(cardBottomValueColors);
		})
		
		buttonSubtract.textContent = '-'
		buttonNumber.textContent = '3';
		buttonAdd.textContent = '+'

		buttonAddToCart.textContent = 'Add to cart';
		descriptionHeadline.textContent = 'Description';
		descriptionText.textContent = product.description;

		// AppendChild to create HTML structure
		previewCardElement.appendChild(cardTopContainer);
		previewCardElement.appendChild(cardBottomContainer);
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
		cardBottomContainer.appendChild(cardButtonsContainer);
		cardBottomContainer.appendChild(cardDescriptionContainer);
		cardBottomContent.appendChild(cardBottomDetail);

		cardBottomDetail.appendChild(cardBottomDetailPrice);
		cardBottomDetail.appendChild(cardBottomDetailBrand);
		cardBottomDetail.appendChild(cardBottomDetailColors);
		cardBottomDetailPrice.appendChild(cardBottomValuePrice);
		cardBottomDetailBrand.appendChild(cardBottomValueBrand);

		cardButtonsContainer.appendChild(buttonQuantity);
		cardButtonsContainer.appendChild(buttonAddToCart);

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
}
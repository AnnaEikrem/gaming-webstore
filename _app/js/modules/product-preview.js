export default function productPreview(products) {
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
		const cardImagesButtonsContainer = document.createElement('div');
		const cardButtonPrevious = document.createElement('button');
		const cardButtonNextIcon = document.createElement('img');
		const cardButtonPreviousIcon = document.createElement('img');
		const cardButtonNext = document.createElement('button');
		const cardImagesContainer = document.createElement('div');

		const cardBottomContainer = document.createElement('div');
		const cardBottomContent = document.createElement('div');
		const cardBottomDetail = document.createElement('div');
		const cardBottomPriceContainer = document.createElement('div');
		const cardBottomBrandContainer = document.createElement('div');
		const cardBottomColorsContainer = document.createElement('div');
		cardBottomColorsContainer.classList.add('detail__brand--container');
		const cardBottomDetailPrice = document.createElement('div');
		const cardBottomDetailBrand = document.createElement('div');
		const cardBottomDetailColors = document.createElement('div');
		const cardBottomValuePrice = document.createElement('div');
		const cardBottomValueBrand = document.createElement('div');

		const buttonAddToCart = document.createElement('button');
		const cardDescriptionContainer = document.createElement('div');
		const descriptionHeadline = document.createElement('h4');
		const descriptionText = document.createElement('article');

		previewCardElement.classList.add('product__preview--card');
		cardTopContainer.classList.add('product__card--top');
		cardTopHeadline.classList.add('product__detail--name');
		cardImagesButtonsContainer.classList.add('product__slide--buttons');
		cardButtonPrevious.classList.add('image__slide--previous');
		cardButtonNext.classList.add('image__slide--next');
		cardImagesContainer.classList.add('product__images--slides');
		cardBottomContainer.classList.add('product__card--bottom');
		cardBottomContent.classList.add('product__details--content');

		cardBottomDetail.classList.add('product__detail');
		cardBottomPriceContainer.classList.add('detail__price--container');
		cardBottomDetailPrice.classList.add('product__detail--text');
		cardBottomDetailPrice.classList.add('price');
		cardBottomBrandContainer.classList.add('detail__brand--container');
		cardBottomDetailBrand.classList.add('product__detail--text');
		cardBottomDetailBrand.classList.add('brand');
		cardBottomColorsContainer.classList.add('detail__brand--container');
		cardBottomDetailColors.classList.add('product__detail--text');
		cardBottomDetailColors.classList.add('colors');
		cardBottomValuePrice.classList.add('product__detail--value');
		cardBottomValueBrand.classList.add('product__detail--value');

		buttonAddToCart.classList.add('card__button--add-to-cart');
		cardDescriptionContainer.classList.add('product__card--description');
		descriptionHeadline.classList.add('card__description--headline');
		descriptionText.classList.add('card__description--text');

		cardTopHeadline.textContent = product.name;
		cardButtonPreviousIcon.setAttribute('src', '/_app/assets/icons/previous-arrow.svg');
		cardButtonNextIcon.setAttribute('src', '/_app/assets/icons/next-arrow.svg');
		cardBottomDetailPrice.textContent = 'Price:';
		cardBottomDetailBrand.textContent = 'Brand:';
		cardBottomDetailColors.textContent = 'Colors:';
		cardBottomValuePrice.textContent = `${productPrice} $`;
		cardBottomValueBrand.textContent = productBrand;

		productColors.forEach(color => {
			const cardBottomValueColors = document.createElement('div');
			const colorCode = color.colorCode;

			cardBottomValueColors.classList.add('product__detail--color--code');
			cardBottomValueColors.classList.add('product__detail--value');
			cardBottomValueColors.style.background = colorCode;

			cardBottomColorsContainer.append(cardBottomDetailColors);
			cardBottomColorsContainer.append(cardBottomValueColors);
		})

		buttonAddToCart.textContent = 'Add to cart';
		descriptionHeadline.textContent = 'Description';
		descriptionText.textContent = product.description;

		// AppendChild to create HTML structure
		previewCardElement.appendChild(cardTopContainer);
		previewCardElement.appendChild(cardBottomContainer);
		cardTopContainer.appendChild(cardTopHeadline);
		cardTopContainer.appendChild(cardImagesButtonsContainer);
		cardTopContainer.appendChild(cardImagesContainer);

		cardImagesButtonsContainer.appendChild(cardButtonPrevious);
		cardButtonPrevious.appendChild(cardButtonPreviousIcon);
		cardImagesButtonsContainer.appendChild(cardButtonNext);
		cardButtonNext.appendChild(cardButtonNextIcon);

		productImages.forEach(image => {
			const cardtopImage = document.createElement('div');
			const imageElementSource = document.createElement('img');

			cardtopImage.classList.add('product__image--slide');
			imageElementSource.classList.add('product__image--source');

			imageElementSource.setAttribute('src', image);
			imageElementSource.setAttribute('alt', product.altText);
			cardTopContainer.appendChild(cardImagesContainer);
			cardImagesContainer.appendChild(cardtopImage);

			cardtopImage.appendChild(imageElementSource);
		});
		
		cardBottomContainer.appendChild(cardBottomContent);
		cardBottomContainer.appendChild(buttonAddToCart);
		cardBottomContainer.appendChild(cardDescriptionContainer);
		cardBottomContent.appendChild(cardBottomDetail);
		cardBottomDetail.appendChild(cardBottomPriceContainer);
		cardBottomDetail.appendChild(cardBottomBrandContainer);
		cardBottomDetail.appendChild(cardBottomColorsContainer);

		cardBottomPriceContainer.appendChild(cardBottomDetailPrice);
		cardBottomPriceContainer.appendChild(cardBottomValuePrice);
		cardBottomBrandContainer.appendChild(cardBottomDetailBrand);
		cardBottomBrandContainer.appendChild(cardBottomValueBrand);

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
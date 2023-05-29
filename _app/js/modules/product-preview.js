/**
 * @todo Improve 'handleButtonAddToCartClick', to check localStorage(cart), and handle styling accordingly.
 */

export default function productPreview(products) {
	// Variables
	const productContainer = document.querySelector('.product__preview--information');
	const currentSearchParams = new URLSearchParams(window.location.search);
	const productSlug = currentSearchParams.get('product');

	// Renders HTML if productContainer is present
	if (productContainer) {
		renderPreviewHTML(productSlug);
	};

	// Returns the productPreview info page based on what product is clicked
	function returnDOMElement(product) {
		const productTitle = product.name;
		const productImages = product.images;
		const productPrice = product.price;
		const productBrand = product.brand.brandName;
		const productColors = product.colors;
		const previewCardElement = document.createElement('div');

		const cardTopContainer = document.createElement('div');
		const cardTopHeadline = document.createElement('h3');
		const cardImagesContainer = document.createElement('div');
		
		const cardImagesButtonsContainer = document.createElement('div');
		const cardButtonPrevious = document.createElement('button');
		const cardButtonNextIcon = document.createElement('img');
		const cardButtonPreviousIcon = document.createElement('img');
		const cardButtonNext = document.createElement('button');

		const cardBottomContainer = document.createElement('div');
		const cardBottomContent = document.createElement('div');
		const cardBottomDetail = document.createElement('div');
		const cardBottomPriceContainer = document.createElement('div');
		const cardBottomBrandContainer = document.createElement('div');
		const cardBottomColorsContainer = document.createElement('div');

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
		cardImagesContainer.classList.add('product__images--slides');
		cardImagesButtonsContainer.classList.add('product__slide--buttons');
		cardButtonPrevious.classList.add('image__slide--previous');
		cardButtonNext.classList.add('image__slide--next');
		cardBottomContainer.classList.add('product__card--bottom');
		cardBottomContent.classList.add('product__details--content');

		cardBottomDetail.classList.add('product__detail');
		cardBottomPriceContainer.classList.add('detail__price--container');
		cardBottomDetailPrice.classList.add('product__detail--text');
		cardBottomDetailPrice.classList.add('price');
		cardBottomBrandContainer.classList.add('detail__brand--container');
		cardBottomDetailBrand.classList.add('product__detail--text');
		cardBottomDetailBrand.classList.add('brand');
		cardBottomColorsContainer.classList.add('detail__color--container');
		cardBottomDetailColors.classList.add('product__detail--text');
		cardBottomDetailColors.classList.add('colors');
		cardBottomValuePrice.classList.add('product__detail--value');
		cardBottomValueBrand.classList.add('product__detail--value');

		buttonAddToCart.classList.add('card__product--add--button');
		cardDescriptionContainer.classList.add('product__card--description');
		descriptionHeadline.classList.add('card__description--headline');
		descriptionText.classList.add('card__description--text');

		cardTopHeadline.textContent = productTitle;
		cardButtonPreviousIcon.setAttribute('src', '/_app/assets/icons/previous-arrow.svg');
		cardButtonNextIcon.setAttribute('src', '/_app/assets/icons/next-arrow.svg');
		cardBottomDetailPrice.textContent = 'Price:';
		cardBottomDetailBrand.textContent = 'Brand:';
		cardBottomDetailColors.textContent = 'Colors:';
		cardBottomValuePrice.textContent = `${productPrice} $`;
		cardBottomValueBrand.textContent = productBrand;

		buttonAddToCart.dataset.name = product.name;
		buttonAddToCart.textContent = 'Add to cart';
		descriptionHeadline.textContent = 'Description';
		descriptionText.textContent = product.description;
		
		// Changes the background color and textcontent on click
		buttonAddToCart.addEventListener('click', handleButtonAddToCartClick);

		// Changes the color to blue when clicked
		function handleButtonAddToCartClick() {
			buttonAddToCart.textContent = 'Added to cart';
			buttonAddToCart.style.background = `var(--color-logo)`;
		}

		// Appends the elements to create HTML structure
		previewCardElement.append(
			cardTopContainer,
			cardBottomContainer
		);
		cardTopContainer.append(
			cardTopHeadline,
			cardImagesContainer
		);
		
		// ButtonsContainer is only appended if more than one product image
		if (productImages.length > 1) {
			cardTopContainer.appendChild(cardImagesButtonsContainer);
		}


		cardImagesButtonsContainer.append(
			cardButtonPrevious,
			cardButtonNext
		);
		
		cardButtonPrevious.appendChild(cardButtonPreviousIcon);
		cardButtonNext.appendChild(cardButtonNextIcon);
		
		cardBottomContainer.append(
			cardBottomContent,
			buttonAddToCart,
			cardDescriptionContainer
		);
		
		cardBottomContent.appendChild(cardBottomDetail);

		cardBottomDetail.append(
			cardBottomPriceContainer,
			cardBottomBrandContainer,
			cardBottomColorsContainer
		);

		cardBottomPriceContainer.append(
			cardBottomDetailPrice,
			cardBottomValuePrice
		);
		
		cardBottomBrandContainer.append(
			cardBottomDetailBrand,
			cardBottomValueBrand
		);

		cardBottomColorsContainer.appendChild(cardBottomDetailColors);

		cardDescriptionContainer.append(
			descriptionHeadline,
			descriptionText
		);

		// Per color code fetched from a product in Sanity, it creates and fills a div with the specific color
		productColors.forEach(color => {
			const cardBottomValueColors = document.createElement('div');
			const colorCode = color.colorCode;

			cardBottomValueColors.classList.add('product__detail--color--code');
			cardBottomValueColors.classList.add('product__detail--value');

			cardBottomValueColors.style.background = colorCode;

			cardBottomColorsContainer.append(cardBottomValueColors);
		});

		// Returns a div/slide per image of the product from Sanity. Made into a slideshow in product-slideshow.js
		productImages.forEach(image => {
			const cardtopImage = document.createElement('div');
			const imageElementSource = document.createElement('img');

			cardtopImage.classList.add('product__image--slide');
			imageElementSource.classList.add('product__visual--source');

			imageElementSource.setAttribute('src', image);
			imageElementSource.setAttribute('alt', product.altText);

			cardImagesContainer.appendChild(cardtopImage);
			cardtopImage.appendChild(imageElementSource);
		});

		return previewCardElement;
	}

	// Finds the product slug that matches the product that is clicked, and appends the DOMElement to container
	function renderPreviewHTML(slug) {
		const currentProduct = products.find(product => product.slug === slug);
		const currentProductClicked = returnDOMElement(currentProduct);

		productContainer.appendChild(currentProductClicked);
	}
}
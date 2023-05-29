export default function productSlideshow() {
	// Variables
	let currentSlideIndex = 0;
	const cardImagesButtonsContainer = document.querySelector('.product__slide--buttons');
	const slides = document.querySelectorAll('.product__image--slide');
	const previousButton = document.querySelector('.image__slide--previous');
	const nextButton = document.querySelector('.image__slide--next');

	// EventListeners
	if (cardImagesButtonsContainer) {
		displaySlide(currentSlideIndex);
		previousButton.addEventListener('click', handlePreviousButtonClick);
		nextButton.addEventListener('click', handleNextButtonClick);
	};


	function displaySlide(index) {
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		slides[index].style.display = 'block';
	}

	// Displays previous image when previousButton is clicked
	function handlePreviousButtonClick() {
		currentSlideIndex--;
		if (currentSlideIndex < 0) {
			currentSlideIndex = slides.length - 1;
		};

		displaySlide(currentSlideIndex);
	};

	// Displays next image when nextButton is clicked
	function handleNextButtonClick() {
		currentSlideIndex++;
		if (currentSlideIndex >= slides.length) {
			currentSlideIndex = 0;
		};

		displaySlide(currentSlideIndex);
	};
}
export default function imageSlides() {
	let currentSlideIndex = 0;
	const slidesContainer = document.querySelector('.product__images--slides')
	const slides = document.querySelectorAll('.product__image--slide');
	const previousButton = document.querySelector('.image__slide--previous');
	const nextButton = document.querySelector('.image__slide--next');

	if (slidesContainer) {
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


	function handlePreviousButtonClick() {
		currentSlideIndex--;
		if (currentSlideIndex < 0) {
			currentSlideIndex = slides.length - 1;
		}

		displaySlide(currentSlideIndex);
	};

	function handleNextButtonClick() {
		currentSlideIndex++;
		if (currentSlideIndex >= slides.length) {
			currentSlideIndex = 0;
		}

		displaySlide(currentSlideIndex);
	};
}
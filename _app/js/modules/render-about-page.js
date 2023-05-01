export default function renderAboutPage(data) {
	const aboutContainer = document.querySelector('.about__section');

	if (aboutContainer) {
		renderAboutPage(data);
	}

	function renderAboutPage(data) {
		const aboutHeadline = data[0].headline;
		const aboutDescription = data[0].description;
	
		const headlineElement = document.createElement('h3');
		const descriptionElement = document.createElement('div');
		
		headlineElement.classList.add('about__headline');
		descriptionElement.classList.add('about__description');
	
		headlineElement.textContent = aboutHeadline;
		descriptionElement.textContent = aboutDescription;
	
		aboutContainer.appendChild(headlineElement);
		aboutContainer.appendChild(descriptionElement);
	}
}
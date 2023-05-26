/**
 * @todo Design header toggling in mobile, to better accomodate the 'filter-search' function, when rendering the results
 */

export default function toggleNavigation() {
	// Variables
	const navigationOpenButton = document.querySelector('.navigation__open--button');
	const navigationCloseButton = document.querySelector('.navigation__close--button');
	const navigationContainer = document.querySelector('.header__navigation');

	// EventListeners
	navigationOpenButton.addEventListener('click', handleOpenButtonClick);
	navigationCloseButton.addEventListener('click', handleCloseButtonClick);

	function handleOpenButtonClick() {
		navigationContainer.classList.add('header__navigation--visible');
		navigationOpenButton.style.display = 'none';
		navigationCloseButton.style.display = 'block';
	}

	function handleCloseButtonClick() {
		navigationContainer.classList.remove('header__navigation--visible');
		navigationOpenButton.style.display = 'block';
		navigationCloseButton.style.display = 'none';
	}
}
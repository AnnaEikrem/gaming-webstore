export default function toggleNavigation() {
	const navigationOpenButton = document.querySelector('.navigation__open--button');
	const navigationCloseButton = document.querySelector('.navigation__close--button');
	const navigationContainer = document.querySelector('.header__navigation');
	const body = document.querySelector('body');

	navigationOpenButton.addEventListener('click', handleOpenButtonClick);

	navigationCloseButton.addEventListener('click', handleCloseButtonClick);
	

	function handleOpenButtonClick() {
		navigationContainer.classList.add('header__navigation--visible');
		navigationOpenButton.style.display = 'none';
		navigationCloseButton.style.display = 'block';
		body.classList.add('no-scroll');
	}


	function handleCloseButtonClick() {
		navigationContainer.classList.remove('header__navigation--visible');
		navigationOpenButton.style.display = 'block';
		navigationCloseButton.style.display = 'none';
		body.classList.remove('no-scroll');
	}
}
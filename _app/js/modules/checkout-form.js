export default function checkoutForm() {
	const formAnchor = document.querySelector('.cart__products--list')
	const checkoutButton = document.querySelector('.cart__total--button');

	if (checkoutButton) {
		checkoutButton.addEventListener('click', handleCheckoutButtonClick)
	}

	function handleCheckoutButtonClick() {
		const popupForm = document.createElement('form');
		const formCloseButton = document.createElement('button');
		const formCloseIcon = document.createElement('img');

		// The personal information
		const formInformationFieldset = document.createElement('fieldset');
		const formInformationLegend = document.createElement('legend');

		const nameDiv = document.createElement('div');
		const nameLabel = document.createElement('label');
		const nameInput = document.createElement('input');

		const emailDiv = document.createElement('div');
		const emailLabel = document.createElement('label');
		const emailInput = document.createElement('input');

		const addressDiv = document.createElement('div');
		const addressLabel = document.createElement('label');
		const addressInput = document.createElement('input');

		const cityDiv = document.createElement('div');
		const cityLabel = document.createElement('label');
		const cityInput = document.createElement('input');

		const postalCodeDiv = document.createElement('div');
		const postalCodeLabel = document.createElement('label');
		const postalCodeInput = document.createElement('input');

		const birthdayDiv = document.createElement('div');
		const birthdayLabel = document.createElement('label');
		const birthdayInput = document.createElement('input');

		// The card information
		const formCardFieldset = document.createElement('fieldset');
		const formCardLegend = document.createElement('legend');

		const cardNumberDiv = document.createElement('div');
		const cardNumberLabel = document.createElement('label');
		const cardNumberInput = document.createElement('input');

		const expirationDiv = document.createElement('div');
		const expirationLabel = document.createElement('label');
		const expirationInput = document.createElement('input');

		const CVVDiv = document.createElement('div');
		const CVVLabel = document.createElement('label');
		const CVVInput = document.createElement('input');

		const checkOutLink = document.createElement('a')

		// Adds classes
		popupForm.classList.add('checkout__form--popup');
		formCloseButton.classList.add('form__close--button');
		formCloseIcon.classList.add('form__close--icon')

		formInformationFieldset.classList.add('form__fieldset--information')
		formInformationLegend.classList.add('form__legend--information');

		formCardFieldset.classList.add('form__fieldset--card')
		formCardLegend.classList.add('form__legend--card');

		nameDiv.classList.add('form__collection')
		nameLabel.classList.add('form__name--label');
		nameInput.classList.add('form__input');

		emailDiv.classList.add('form__collection')
		emailLabel.classList.add('form__email--label');
		emailInput.classList.add('form__input');

		addressDiv.classList.add('form__collection')
		addressLabel.classList.add('form__address--label');
		addressInput.classList.add('form__input');

		cityDiv.classList.add('form__collection')
		cityLabel.classList.add('form__city--label');
		cityInput.classList.add('form__input');

		postalCodeDiv.classList.add('form__collection')
		postalCodeLabel.classList.add('form__postal-code--label');
		postalCodeInput.classList.add('form__input');

		birthdayDiv.classList.add('form__collection')
		birthdayLabel.classList.add('form__birthday--label');
		birthdayInput.classList.add('form__input');

		cardNumberDiv.classList.add('form__collection')
		cardNumberLabel.classList.add('form__card-number--label');
		cardNumberInput.classList.add('form__input');

		expirationDiv.classList.add('form__collection')
		expirationLabel.classList.add('form__expiration--label');
		expirationInput.classList.add('form__input');

		CVVDiv.classList.add('form__collection')
		CVVLabel.classList.add('form__CVV--label');
		CVVInput.classList.add('form__input');

		checkOutLink.classList.add('form__checkout--button');

		// Sets attributes and textcontent
		/**
		 * @todo Add required to form
		 * @todo Add 'small' as from chat
		 */

		popupForm.setAttribute('id', 'checkout-form');
		// popupForm.setAttribute('action', 'submit-form');
		// popupForm.setAttribute('method', 'post');
		formInformationLegend.textContent = 'Shipping information';
		formCloseIcon.setAttribute('src', '/_app/assets/icons/x-solid.svg');
		formCloseIcon.setAttribute('alt', 'Close checkout form');

		nameLabel.textContent = 'Name:'
		nameLabel.setAttribute('for', 'name');
		nameInput.setAttribute('type', 'text');
		nameInput.setAttribute('id', 'name');
		nameInput.setAttribute('name', 'name');

		emailLabel.textContent = 'Email:'
		emailLabel.setAttribute('for', 'email');
		emailInput.setAttribute('type', 'email');
		emailInput.setAttribute('id', 'email');
		emailInput.setAttribute('name', 'email');

		addressLabel.textContent = 'Address:'
		addressLabel.setAttribute('for', 'address');
		addressInput.setAttribute('type', 'text');
		addressInput.setAttribute('id', 'address');
		addressInput.setAttribute('name', 'address');

		cityLabel.textContent = 'City:'
		cityLabel.setAttribute('for', 'city');
		cityInput.setAttribute('type', 'text');
		cityInput.setAttribute('id', 'city');
		cityInput.setAttribute('name', 'city');

		postalCodeLabel.textContent = 'Postal Code:'
		postalCodeLabel.setAttribute('for', 'zip');
		postalCodeInput.setAttribute('type', 'text');
		postalCodeInput.setAttribute('id', 'zip');
		postalCodeInput.setAttribute('name', 'zip');
		postalCodeInput.setAttribute('pattern', '[0-9]{4}');

		birthdayLabel.textContent = 'Birthdate:'
		birthdayLabel.setAttribute('for', 'birthdate');
		birthdayInput.setAttribute('type', 'text');
		birthdayInput.setAttribute('id', 'birthdate');
		birthdayInput.setAttribute('name', 'birtdate');
		birthdayInput.setAttribute('placeholder', 'dd.mm.yyyy');
		// birthdayInput.setAttribute('pattern', '(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.[0-9]{4}');

		formCardLegend.textContent = 'Card information';
		cardNumberLabel.textContent = 'Card Number:'
		cardNumberLabel.setAttribute('for', 'card-number');
		cardNumberInput.setAttribute('type', 'text');
		cardNumberInput.setAttribute('id', 'card-number');
		cardNumberInput.setAttribute('name', 'card-number');
		// cardNumberInput.setAttribute('pattern', '[0-9]{16}');

		expirationLabel.textContent = 'Expiration Date:'
		expirationLabel.setAttribute('for', 'expiration-date');
		expirationInput.setAttribute('type', 'text');
		expirationInput.setAttribute('id', 'expiration-date');
		expirationInput.setAttribute('name', 'expiration-date');
		// expirationInput.setAttribute('pattern', '(0[1-9]|1[0-2])\/[0-9]{2}');

		CVVLabel.textContent = 'CVV:'
		CVVLabel.setAttribute('for', 'card-cvv');
		CVVInput.setAttribute('type', 'text');
		CVVInput.setAttribute('id', 'card-cvv');
		CVVInput.setAttribute('name', 'card-cvv');
		// CVVInput.setAttribute('pattern', '[0-9]{3}');

		checkOutLink.textContent = 'Check out';
		checkOutLink.setAttribute('href', '/index.html')

		// Appends elements
		formAnchor.appendChild(popupForm);
		popupForm.appendChild(formCloseButton);
		formCloseButton.appendChild(formCloseIcon);
		popupForm.appendChild(formInformationFieldset);
		popupForm.appendChild(formCardFieldset);
		
		formInformationFieldset.appendChild(formInformationLegend);

		formInformationFieldset.appendChild(nameDiv);
		nameDiv.appendChild(nameLabel);
		nameDiv.appendChild(nameInput);

		formInformationFieldset.appendChild(emailDiv);
		emailDiv.appendChild(emailLabel);
		emailDiv.appendChild(emailInput);

		formInformationFieldset.appendChild(addressDiv);
		addressDiv.appendChild(addressLabel);
		addressDiv.appendChild(addressInput);

		formInformationFieldset.appendChild(cityDiv);
		cityDiv.appendChild(cityLabel);
		cityDiv.appendChild(cityInput);

		formInformationFieldset.appendChild(postalCodeDiv);
		postalCodeDiv.appendChild(postalCodeLabel);
		postalCodeDiv.appendChild(postalCodeInput);

		formInformationFieldset.appendChild(birthdayDiv);
		birthdayDiv.appendChild(birthdayLabel);
		birthdayDiv.appendChild(birthdayInput);

		formCardFieldset.appendChild(formCardLegend);

		formCardFieldset.appendChild(cardNumberDiv);
		cardNumberDiv.appendChild(cardNumberLabel);
		cardNumberDiv.appendChild(cardNumberInput);

		formCardFieldset.appendChild(expirationDiv);
		expirationDiv.appendChild(expirationLabel);
		expirationDiv.appendChild(expirationInput);

		formCardFieldset.appendChild(CVVDiv);
		CVVDiv.appendChild(CVVLabel);
		CVVDiv.appendChild(CVVInput);

		popupForm.appendChild(checkOutLink);
	}
}
export default function filterSearch(products) {
	let filterString = '';
	let caseSensitive = false;

	const searchResultsAnchor = document.querySelector('.header__container');
	const searchResultsContainer = document.createElement('ul');
	const searchInput = document.querySelector('.menu__input--field'); 

	const productsData = products.map(product => {
		return {
			name: product.name,
			brand: product.brand.brandName,
		}
	});

	const productsDataAsString = productsData.map(data => `${data.name} ${data.brand}`);

	// function debounce(fn, delay) {
	// 	let timerId;
	// 	return function(...args) {
	// 		clearTimeout(timerId);
	// 		timerId = setTimeout(() => {
	// 			fn.apply(this,args);
	// 		}, delay);
	// 	};
	// };

	// const debounceSearchButtonInput = debounce(handleSearchButtonInput, 300);

	if (searchResultsAnchor) {
		searchInput.addEventListener('input', handleSearchButtonInput);
	}


	// if (searchResultsAnchor) {
	// 	searchInput.addEventListener('input', debounceSearchButtonInput);
	// }

	function handleSearchButtonInput(event) {
		let currentValue = event.currentTarget.value;
		
		updateFilterString(currentValue);
		renderResultsHTML();
	}

	function updateFilterString(currentInput) {
		filterString = currentInput;
	}

	function renderResultsHTML() {
		searchResultsContainer.innerHTML = '';

		for (const string of productsDataAsString) {
			const stringToCompare = caseSensitive ? string : string.toLowerCase();
			const filterToCompare = caseSensitive ? filterString : filterString.toLowerCase();
			const indexOfMatch = stringToCompare.indexOf(filterToCompare);

			if (indexOfMatch > -1) {
				const productLink = document.createElement('a');
				const productInfo = document.createElement('div');

				productLink.classList.add('input__result--item');
				productInfo.classList.add('result__item--info');

				const beforeMatch = string.slice(0, indexOfMatch);
				const match = string.slice(indexOfMatch, indexOfMatch + filterString.length);
				const afterMatch = string.slice(indexOfMatch + filterString.length);

				productInfo.innerHTML = `${beforeMatch} <mark>${match}</mark>${afterMatch}`;

				productLink.appendChild(productInfo);
				searchResultsContainer.appendChild(productLink);
			}
		}
		searchResultsAnchor.appendChild(searchResultsContainer);
	}
}
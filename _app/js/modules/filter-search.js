export default function filterSearch(products) {
	let filterString = '';
	let caseSensitive = false;

	const searchInput = document.querySelector('.menu__input--field');
	const searchResultsContainer = document.querySelector('.filter__search--resultss');
	const searchResultsList = document.createElement('ul'); 

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

	if (searchResultsContainer) {
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
		searchResultsList.innerHTML = '';

		for (const string of productsDataAsString) {
			const stringToCompare = caseSensitive ? string : string.toLowerCase();
			const filterToCompare = caseSensitive ? filterString : filterString.toLowerCase();
			const indexOfMatch = stringToCompare.indexOf(filterToCompare);

			if (indexOfMatch > -1) {
				const productLink = document.createElement('a');
				const productInfo = document.createElement('div');

				const beforeMatch = string.slice(0, indexOfMatch);
				const match = string.slice(indexOfMatch, indexOfMatch + filterString.length);
				const afterMatch = string.slice(indexOfMatch + filterString.length);

				productLink.classList.add('input__result--item');
				productInfo.classList.add('result__item--info');

				productInfo.innerHTML = `${beforeMatch} <mark>${match}</mark>${afterMatch}`;

				searchResultsContainer.appendChild(searchResultsList);
				searchResultsList.appendChild(productLink);
				productLink.appendChild(productInfo);
			}
		}
	}
}
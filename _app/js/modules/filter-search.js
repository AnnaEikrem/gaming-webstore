export default function filterSearch(products) {
	let filterString = '';
	let caseSensitive = false;

	const searchInput = document.querySelector('.menu__input--field');
	const searchResultsContainer = document.querySelector('.filter__search--results');
	const searchResultsList = document.createElement('ul'); 
	const productsData = products.map(product => {
		return {
			name: product.name,
			brand: product.brand.brandName,
		}
	});

	const productsDataAsString = productsData.map(data => `${data.name} - ${data.brand}`);
	const closeFilterButton = document.createElement('button');

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

	searchResultsList.classList.add('input__results--list');	
	closeFilterButton.classList.add('filter__search--results--close');

	closeFilterButton.textContent = 'Close';

	closeFilterButton.addEventListener('click', handleCloseFilterButtonClick);

	function handleCloseFilterButtonClick() {
		searchResultsContainer.removeChild(searchResultsList);
		closeFilterButton.remove('filter__search--results--close');
	}

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
				const productItem = document.createElement('button');
				const productPreviewLink = document.createElement('a');
				const beforeMatch = string.slice(0, indexOfMatch);
				const match = string.slice(indexOfMatch, indexOfMatch + filterString.length);
				const afterMatch = string.slice(indexOfMatch + filterString.length);

				productItem.classList.add('input__result--item');
				productPreviewLink.classList.add('result__item--info');

				productPreviewLink.innerHTML = `${beforeMatch}<mark>${match}</mark>${afterMatch}`;

				searchResultsContainer.appendChild(closeFilterButton);
				searchResultsContainer.appendChild(searchResultsList);
				searchResultsList.appendChild(productItem);
				productItem.appendChild(productPreviewLink);
			}
		}
	}
}
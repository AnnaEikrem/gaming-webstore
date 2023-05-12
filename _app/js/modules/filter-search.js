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
			slug: product.slug,
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
		products.forEach(product => {
			renderResultsHTML(product);
		})
	}

	function updateFilterString(currentInput) {
		filterString = currentInput;
	}

	function renderResultsHTML(product) {
		searchResultsList.innerHTML = '';
		for (const string of productsDataAsString) {
			const stringToCompare = caseSensitive ? string : string.toLowerCase();
			const filterToCompare = caseSensitive ? filterString : filterString.toLowerCase();
			const indexOfMatch = stringToCompare.indexOf(filterToCompare);

			if (indexOfMatch > -1) {
				const slug = product.slug;
				const productPreviewLink = document.createElement('a');
				const beforeMatch = string.slice(0, indexOfMatch);
				const match = string.slice(indexOfMatch, indexOfMatch + filterString.length);
				const afterMatch = string.slice(indexOfMatch + filterString.length);

				productPreviewLink.classList.add('result__item--link');

					console.log(slug)
					
				productPreviewLink.setAttribute('href', `/_app/product-preview/index.html?product=${slug}`);

				productPreviewLink.innerHTML = `${beforeMatch}<mark>${match}</mark>${afterMatch}`;

				searchResultsContainer.appendChild(closeFilterButton);
				searchResultsContainer.appendChild(searchResultsList);
				searchResultsList.appendChild(productPreviewLink);
			}
		}
	}
}
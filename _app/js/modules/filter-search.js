/**
 * @todo Add debounce to filter-search
 * @todo Add 'color marking' to string match of search 
 */

export default function filterSearch(products) {
	// Variables
	let filterString = '';
	let caseSensitive = false;

	const searchInput = document.querySelector('.menu__input--field');
	const searchResultsContainer = document.querySelector('.filter__search--results');
	const searchResultsList = document.createElement('ul'); 

	const productsData = products.map(product => (
			{
				name: product.name, 
				brand: product.brand.brandName,
				slug: product.slug}
		)
	);

	// EventListeners
	if (searchResultsContainer) {
		searchInput.addEventListener('input', handleSearchFieldInput);
	};

	searchResultsList.classList.add('input__results--list');
	searchResultsContainer.appendChild(searchResultsList);

	// Sends currentValue from input field into updateFilterString, and renders HTML  
	function handleSearchFieldInput(event) {
		let currentValue = event.currentTarget.value;
		
		updateFilterString(currentValue);
		renderResultsHTML();
	}

	// Updats filterString with value from input field
	function updateFilterString(currentInput) {
		filterString = currentInput;
	}

	// SearchList is filled with the results that are filtered to match the currentValue written in input field
	function renderResultsHTML() {
		searchResultsList.innerHTML = '';

		const results = productsData.filter(product => {
			return product.name
				.toLowerCase()
				.includes(filterString
					.toLowerCase());
		})

		// Appends a close button to the filter-results list
		if (results.length > 0) {
			const closeFilterButton = document.createElement('button');
			closeFilterButton.classList.add('filter__search--results--close');
			closeFilterButton.textContent = 'Close';

			closeFilterButton.addEventListener('click', handleCloseFilterButtonClick);
			searchResultsList .appendChild(closeFilterButton);
		}

		// Renders a list item per filter-search result, and adds the href of the product, that leads to the product-preview
		results.forEach(product => {
			const listItem = document.createElement('li');
			const resultLink = document.createElement('a');
			
			resultLink.classList.add('result__item--link');
			resultLink.textContent = product.name;
			resultLink.setAttribute('href', `/product-preview/index.html?product=${product.slug}`);
			
			searchResultsList.appendChild(listItem);
			listItem.appendChild(resultLink);
		});

		while (searchResultsContainer.firstChild) {
			searchResultsContainer.removeChild(searchResultsContainer.firstChild);
		 }
	
		 searchResultsContainer.appendChild(searchResultsList);
	}

	// Removes the filter-search results list when close button is clicked
	function handleCloseFilterButtonClick() {
		searchResultsContainer.removeChild(searchResultsList)
	}
}
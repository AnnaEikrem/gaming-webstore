/**
 * @todo Add debounce to filter-search.
 * @todo Get the right 'product-preview' link.
 * @todo Add 'color marking' to string match of search. 
 */

export default function filterSearch(products) {
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

	if (searchResultsContainer) {
		searchInput.addEventListener('input', handleSearchFieldInput);
	};

	searchResultsList.classList.add('input__results--list');
	searchResultsContainer.appendChild(searchResultsList);

	function handleSearchFieldInput(event) {
		let currentValue = event.currentTarget.value;
		
		updateFilterString(currentValue);
		renderResultsHTML();
	};

	function updateFilterString(currentInput) {
		filterString = currentInput;
	};

	function renderResultsHTML() {
		searchResultsList.innerHTML = '';

		const results = productsData.filter(product => {
			return product.name
				.toLowerCase()
				.includes(filterString
					.toLowerCase());
		})

		if (results.length > 0) {
			const closeFilterButton = document.createElement('button');
			closeFilterButton.classList.add('filter__search--results--close');
			closeFilterButton.textContent = 'Close';

			closeFilterButton.addEventListener('click', handleCloseFilterButtonClick);
			searchResultsList .appendChild(closeFilterButton);
		}

		results.forEach(product => {
			const listItem = document.createElement('li')
			const resultLink = document.createElement('a');
			
			resultLink.classList.add('result__item--link')
			resultLink.textContent = product.name;
			resultLink.setAttribute('href', '/_app/product-preview/index.html?product=${product.slug}');
			
			searchResultsList.appendChild(listItem);
			listItem.appendChild(resultLink);
		});

		while (searchResultsContainer.firstChild) {
			searchResultsContainer.removeChild(searchResultsContainer.firstChild);
		 }
	
		 searchResultsContainer.appendChild(searchResultsList);
	};

	function handleCloseFilterButtonClick() {
		searchResultsContainer.removeChild(searchResultsList)
	};
}
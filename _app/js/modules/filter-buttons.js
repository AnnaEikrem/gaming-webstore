import renderProductCards from "./render-products.js";

export default function filterButtons(products) {
	// Variables
	const productsListContainer = document.querySelector('.list__products--all');
	const filterButtonsContainer = document.querySelector('.products__filter--buttons');
	const subButtonsContainer = document.querySelector('.products__filter--sub--buttons');

	// Array of the main category buttons
	const categoryButtons = [
		{
			category: 'All'
		},
		{
			category: 'Consoles'
		},
		{
			category: 'Games'
		},
		{
			category: 'Brand'
		}
	];

	// Array of the brand sub buttons
	const brandSubButtons = [
		{
			brand: 'Atari'
		},
		{
			brand: 'Bandai'
		},
		{
			brand: 'Nintendo'
		},
		{
			brand: 'Sega'
		},
		{
			brand: 'Sony'
		}
	];

	if (filterButtonsContainer) {
		renderCategoryButtons();
	}

	// Identifies the clicked category button and product.
	function handleCategoryButtonClick(event) {
		let currentProduct = event.target.innerText;
		const clickedButton = event.target;
		const allCategoryButtons = event.target.parentElement.querySelectorAll('button');
		
		clearButtonsContainer();
		toggleClass(allCategoryButtons, clickedButton);
		filterProducts(currentProduct);
	}

	function handleSubBrandButtonClick(event) {
		let currentProduct = event.target.innerText;
		const clickedButton = event.target;
		const allCategoryButtons = event.target.parentElement.querySelectorAll('button');

		toggleClass(allCategoryButtons, clickedButton);
		filterBrandProducts(currentProduct)
	}

	// Empties the Brand sub buttons container
	function clearButtonsContainer() {
		subButtonsContainer.textContent = '';
	};

	// Applies the active class to the category button that is clicked, styled in filter-buttons.css
	function toggleClass(allCategoryButtons, clickedButton) {
		allCategoryButtons.forEach(button => {
			button.classList.remove('filtered__products--active');
		});

		clickedButton.classList.add('filtered__products--active');
	}

	// Fills the filteredProducts array with products that match the category clicked
	function filterProducts(currentProduct) {
		let filteredProducts = [];

		switch (currentProduct) {
			case 'All':
				filteredProducts = products;
					break;

			// When clicked, this category button renders sub buttons
			case 'Brand':
				renderBrandSubButtons();
					break;

			case 'Consoles':
				filteredProducts = products.filter(product => product.category.name === 'Consoles');
					break;

			case 'Games':
				filteredProducts = products.filter(product => product.category.name === 'Games');
					break;
		}

		productsListContainer.innerHTML = '';
		renderProductCards(filteredProducts);
	};

	// Fills the filteredBrandProducts array with products that match the brand button clicked
	function filterBrandProducts(currentBrandProduct) {
		let filteredBrandProducts = [];

		switch (currentBrandProduct) {
			case 'Atari':
				filteredBrandProducts = products.filter(product => product.brand.brandName === 'Atari');
					break;

			case 'Bandai':
				filteredBrandProducts = products.filter(product => product.brand.brandName === 'Bandai');
					break;

			case 'Nintendo':
				filteredBrandProducts = products.filter(product => product.brand.brandName === 'Nintendo');
					break;

			case 'Sega':
				filteredBrandProducts = products.filter(product => product.brand.brandName === 'Sega');
					break;

			case 'Sony':
				filteredBrandProducts = products.filter(product => product.brand.brandName === 'Sony');
					break;
		}

		productsListContainer.innerHTML = '';
		renderProductCards(filteredBrandProducts);
	};

	// Returns a button element per object in the categoryButtons array
	function buttonDOMElement(button) {
		const categoryButton = document.createElement('button');
		categoryButton.classList.add('category__button');
		categoryButton.textContent = button.category;
		categoryButton.dataset.filterCategory = button.category;

		categoryButton.addEventListener('click', handleCategoryButtonClick);

		return categoryButton;
	}

	// Returns a button element per object in the brandSubButtons array
	function subButtonDOMElement(button) {
		const subBrandButton = document.createElement('button');
		subBrandButton.classList.add('category__button');
		subBrandButton.textContent = button.brand;
		subBrandButton.dataset.filterCategory = button.brand;

		subBrandButton.addEventListener('click', handleSubBrandButtonClick);

		return subBrandButton;
	}

	// Renders a category button based on length of the categoryButtons array
	function renderCategoryButtons() {
		for (let i = 0; i < categoryButtons.length; i++) {
			const buttonElement = buttonDOMElement(categoryButtons[i]);

			filterButtonsContainer.appendChild(buttonElement);
		}
	}
    
	// Renders a category button based on length of the brandSubButtons array
	function renderBrandSubButtons() {
		for (let i = 0; i < brandSubButtons.length; i++) {
			const buttonElement = subButtonDOMElement(brandSubButtons[i]);
			subButtonsContainer.appendChild(buttonElement);
		}
	}
};

import renderProductCards from "./render-products.js";

export default function filterProducts(products) {
	const productsListContainer = document.querySelector('.list__products--all');
	const filterButtonsContainer = document.querySelector('.products__filter--buttons');
	const subButtonsContainer = document.querySelector('.products__filte--sub--buttons');

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

	function handleCategoryButtonClick(event) {
		let currentProduct = event.target.innerText;
		const clickedbutton = event.target;
		const allCategoryButtons = event.target.parentElement.querySelectorAll('button');
		
		clearButtonsContainer();
		toggleClass(allCategoryButtons, clickedbutton);
		filterProducts(currentProduct);
	}

	function handleSubBrandButtonClick(event) {
		let currentProduct = event.target.innerText;
		const clickedButton = event.target;
		const allCategoryButtons = event.target.parentElement.querySelectorAll('button');

		toggleClass(allCategoryButtons, clickedButton);
		filterBrandProducts(currentProduct)
	}

	function clearButtonsContainer() {
		subButtonsContainer.textContent = '';
	};

	function toggleClass(allCategoryButtons, clickedbutton) {
		allCategoryButtons.forEach(button => {
			button.classList.remove('filtered__products--active');
		});

		clickedbutton.classList.add('filtered__products--active');
	};

	function filterProducts(currentProduct) {
		let filteredProducts = [];

		switch (currentProduct) {
			case 'All':
				filteredProducts = products;
					break;

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

	function buttonDOMElement(button) {
		const categoryButton = document.createElement('button');
		categoryButton.classList.add('category__button');
		categoryButton.textContent = button.category;
		categoryButton.dataset.filterCategory = button.category;

		categoryButton.addEventListener('click', handleCategoryButtonClick);

		return categoryButton;
	}

	function subButtonDOMElement(button) {
		const subBrandButton = document.createElement('button');
		subBrandButton.classList.add('category__button');
		subBrandButton.textContent = button.brand;
		subBrandButton.dataset.filterCategory = button.brand;

		subBrandButton.addEventListener('click', handleSubBrandButtonClick);

		return subBrandButton;
	}

	function renderCategoryButtons() {
		for (let i = 0; i < categoryButtons.length; i++) {
			const buttonElement = buttonDOMElement(categoryButtons[i]);

			filterButtonsContainer.appendChild(buttonElement);
		}
	};

	function renderBrandSubButtons() {
		for (let i = 0; i < brandSubButtons.length; i++) {
			const buttonElement = subButtonDOMElement(brandSubButtons[i]);
			subButtonsContainer.appendChild(buttonElement);
		}
	}
};

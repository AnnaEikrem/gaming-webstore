import renderProductCards from "./render-products.js";

export default function filterProducts(products) {
	let filteredProducts = [];
	const productsListContainer = document.querySelector('.list__products--all');
	const filterButtonsContainer = document.querySelector('.products__filter--buttons');
	const subButtonsContainer = document.querySelector('products__filte--sub--buttons');

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

	function clearButtonsContainer() {
		productsListContainer.textContent = '';
	};

	function toggleClass(allCategoryButtons, clickedbutton) {
		allCategoryButtons.forEach(button => {
			button.classList.remove('filtered__products--active');
		});

		clickedbutton.classList.add('filtered__socks--active');
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

				// product.brand.brandName

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

	function renderBrandSubButtons() {
		console.log('hei')
	}

	function buttonDOMElement(button) {
		const categoryButton = document.createElement('button');
		categoryButton.classList.add('category__button');
		categoryButton.textContent = button.category;
		categoryButton.dataset.filterCategory = button.category;

		categoryButton.addEventListener('click', handleCategoryButtonClick);

		return categoryButton;
	}


	function renderCategoryButtons() {
		for (let i = 0; i < categoryButtons.length; i++) {
			const buttonElement = buttonDOMElement(categoryButtons[i]);

			filterButtonsContainer.appendChild(buttonElement);
		}
	};
};

import fetchProductsData from "./modules/fetch-products-data.js";

import toggleNavigation from "./modules/toggleNavigation.js";
import renderProductCards from "./modules/render-products.js";



const fetchedData = await fetchProductsData();

renderProductCards(fetchedData);

toggleNavigation();
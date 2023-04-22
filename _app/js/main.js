import fetchProductsData from "./modules/fetch-products-data.js";

import toggleNavigation from "./modules/toggle-navigation.js";
import renderProductCards from "./modules/render-products.js";



const fetchedData = await fetchProductsData();

renderProductCards(fetchedData);

toggleNavigation();
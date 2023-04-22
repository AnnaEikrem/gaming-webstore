import fetchProductsData from "./modules/fetch-products-data.js";

import toggleNavigation from "./modules/toggleNavigation.js";
import productsStore from "./modules/products-store.js";

const fetchedData = await fetchProductsData();

productsStore(fetchedData);

toggleNavigation();
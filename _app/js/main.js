import fetchProductsData from "./modules/fetch-products-data.js";
import toggleNavigation from "./modules/toggle-navigation.js";
import renderProductCards from "./modules/render-products.js";
import productPreview from "./modules/product-preview.js";
import imageSlides from "./modules/image-slides.js";
import filterButtons from "./modules/filter-buttons.js";
import filterSearch from "./modules/filter-search.js";
import shoppingCart from "./modules/shopping-cart.js";

import aboutPage from "./modules/fetch-about-page.js";
import renderAboutPage from "./modules/render-about-page.js";

const fetchedData = await fetchProductsData();
const aboutData = await aboutPage();

renderProductCards(fetchedData);
toggleNavigation();
productPreview(fetchedData);
imageSlides();
filterButtons(fetchedData);
filterSearch(fetchedData);
renderAboutPage(aboutData);
shoppingCart(fetchedData);
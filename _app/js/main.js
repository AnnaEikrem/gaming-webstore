import fetchProductsData from "./modules/fetch-products-data.js";
import toggleNavigation from "./modules/toggle-navigation.js";
import renderProductCards from "./modules/render-products.js";
import previewProduct from "./modules/product-preview.js";
import imageSlides from "./modules/image-slides.js";
import filterButtons from "./modules/filter-buttons.js";
import filterSearch from "./modules/filter-search.js";

import aboutPage from "./modules/fetch-about-page.js";
import renderAboutPage from "./modules/render-about-page.js";

const fetchedData = await fetchProductsData();
const aboutData = await aboutPage();

renderProductCards(fetchedData);
toggleNavigation();
previewProduct(fetchedData);
imageSlides();
filterButtons(fetchedData);
filterSearch(fetchedData);
renderAboutPage(aboutData);
import fetchProductsData from "./modules/fetch-products-data.js";
import toggleNavigation from "./modules/toggle-navigation.js";
import renderProductCards from "./modules/render-products.js";
import previewProduct from "./modules/product-preview.js";
import imageSlides from "./modules/imageSlides.js";

const fetchedData = await fetchProductsData();

renderProductCards(fetchedData);
toggleNavigation();
previewProduct(fetchedData);
imageSlides();
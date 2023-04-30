import fetchProductsData from "./modules/fetch-products-data.js";
import toggleNavigation from "./modules/toggle-navigation.js";
import renderProductCards from "./modules/render-products.js";
import previewProduct from "./modules/product-preview.js";
import imageSlides from "./modules/image-slides.js";
import filterProducts from "./modules/filter-products.js";

const fetchedData = await fetchProductsData();

renderProductCards(fetchedData);
toggleNavigation();
previewProduct(fetchedData);
imageSlides();
filterProducts(fetchedData);
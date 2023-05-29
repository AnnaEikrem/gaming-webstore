import { sanity } from '../sanity.js';

/**
 * Error.mesasge comes from Sanity.client file
 */

export default async function fetchProductsData() {
	// Query to fetch data from Sanity
	const query = `*[_type == 'product'] {
		'id': _id,
		'name': name,
		'productImage': images[0].asset -> url,
  		'images': images[].asset -> url,
		'altText': images[].alt,
		'brand': brand -> {
		  'brandName': name,
		  'brandDescription': description,
		  'brandSlug': slug.current,
		},
		'price': price,
		'colors': colors[] -> {
		  'color': name,
		  'colorCode': hexColor
		},
		'description': description,
		'category': category -> {
		  name,
		},
		'tags': tags[] -> {
		  'tagName': name,
		  'tagSlug': slug.current
		},
	  
		'availability': availability,
		'slug': slug.current
  }`;

  const fetchData = getDataFromTryCatch(query);
  return fetchData;

  // Try/Catch for handling errors when fetching
	async function getDataFromTryCatch(query) {
		try {
			const productsData = await sanity.fetch(query);
			return productsData;
		} catch (Error) {
			const errorDivs = document.querySelectorAll('.error__div');

			errorDivs.forEach(element => {
				element.innerText = Error.message
			});
		};
	}
}

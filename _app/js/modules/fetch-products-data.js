import { sanity } from '../sanity.js';

export default async function fetchProductsData() {
	const query = `*[_type == 'product'] {
		'id': _id,
		'productName': name,
		'thumbnailImage': image.asset._ref,
		'productImages': productImages[].asset._ref,
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
		'productSlug': slug.current
  }`;

  const params = {};
  const productsData = await sanity.fetch(query, params)

  return productsData;
}
/**
 * Er det bedre å fetche data med query i hver function? eller hente all dataen en gang også sende informasjonen videre??
 */

// try {
	// 	return await handleResponse(response);
	// } catch (error) {
	// 	handleError(error);
	// };

// async function handleResponse(response) {
// 	if (response.ok) {
// 		const productResults = await response.json();
// 		return productResults;
// 	}
// }

// function handleError() {
// 	console.log('Something went wrong')
// }
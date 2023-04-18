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
		  'colorHex': hexColor
		},
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
  const productsData = await sanity.fetch(query, params);
  

  return productsData;
}
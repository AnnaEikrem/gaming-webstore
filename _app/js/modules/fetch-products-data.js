import { sanity } from '../sanity.js';

export default async function fetchProductsData() {
	const query = `*[_type == 'product'] {
		'id': _id,
		'name': name,
		'productImage': images[0].asset -> url,
  		'images': images[].asset -> url,
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

  const params = {};
  const productsData = await sanity.fetch(query, params)

  return productsData;
}

import { sanity } from '../sanity.js';

export default async function aboutPage() {
	const pageQuery = `*[_type == 'pages'] {
		name,
		headline,
		description,
	}`;

	const params = {};
	const pageData = await sanity.fetch(pageQuery, params);

	return pageData;
}
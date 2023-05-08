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

// export default async function aboutPage() {
// 	try {
// 		const pageQuery = `*[_type == 'pages'] {
// 			name,
// 			headline,
// 			description,
// 		}`;

// 		const params = {};
// 		const pageData = await sanity.fetch(pageQuery, params);

// 		return pageData;
// 	} catch (error) {
// 		console.error(error);

// 		if (error.response && error.response.status === 404) {
// 			throw new Error('Url not existing');
// 		} else if (error.response && error.response.status === 401) {
// 			throw new Error('Not authorized user');
// 		} else if (error.response && error.response.status >= 500) {
// 			throw new Error('Server not responding');
// 		} else {
// 			throw new Error('Something went wrong');
// 		}
// 	}
// }

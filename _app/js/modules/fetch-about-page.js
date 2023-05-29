import { sanity } from '../sanity.js';

/**
 * Error.mesasge comes from Sanity.client file
 */

export default async function aboutPage() {
	// Query to fetch data from Sanity
	const pageQuery = `*[_type == 'pages'] {
		name,
		headline,
		description,
	}`;

	const fetchData = getDataFromTryCatch(pageQuery);
	return fetchData;

	// Try/Catch for handling errors when fetching
	async function getDataFromTryCatch(pageQuery) {
		try {
			const pageData = await sanity.fetch(pageQuery);
			return pageData
		} catch (Error) {
			const errorDivs = document.querySelectorAll('.error__div');

			errorDivs.forEach(element => {
			element.innerText = Error.message
			})
		}
	}
}
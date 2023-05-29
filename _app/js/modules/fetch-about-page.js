import { sanity } from '../sanity.js';

/**
 * Error.mesasge comes from Sanity.client file
 */

export default async function aboutPage() {
		const pageQuery = `*[_type == 'pages'] {
			name,
			headline,
			description,
		}`;

		const fetchData = getDataFromTryCatch(pageQuery);
		return fetchData;

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
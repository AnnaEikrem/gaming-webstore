import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import catalogue from './schemas/structure/catalogue.js';
import settings from './schemas/structure/settings.js';

export default {
	title: 'Nostalgic Gaming',

	projectId: '40dnjnyw',
	dataset: 'production',

	plugins: [
		deskTool({
			title: 'Catalogue',
			name: 'catalogue',
			structure: catalogue
		}),


		deskTool({
			title: 'Settings',
			name: 'Settings',
			structure: settings
		}),
		

		visionTool()],

	schema: {
		types: schemas,
	},
};

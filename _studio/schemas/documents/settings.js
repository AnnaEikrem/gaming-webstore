export default {
	title: 'Settings',
	name: 'settings',
	type: 'document',
	fields: [
		{
			title: 'Footer',
			name: 'footer',
			type: 'object',
			fields: [
				{
					title: 'Text',
					name: 'text',
					type: 'string',
				},
				{
					title: 'Phone number',
					name: 'phoneNumber',
					type: 'number',
				},
				{
					title: 'Contact e-mail',
					name: 'contactEmail',
					type: 'email',
				},
				{
					title: 'Social Media',
					name: 'socialMedia',
					type: 'string',
				},
				{
					title: 'Media links',
					name: 'mediaLinks',
					type: 'array',
					of: [
						{
							title: 'Facebook',
							name: 'facebook',
							type: 'string',
						},
						{
							title: 'Tiktok',
							name: 'tiktok',
							type: 'string',
						},
						{
							title: 'Instagram',
							name: 'instagram',
							type: 'string',
						},

					]
				},






					// {
				// 	title: 'Visible',
				// 	name: 'visible',
				// 	type: 'boolean',
				// },
			]
		},
	],

	preview: {
		prepare: () => {
			return {
				title: 'Settings'
			}
		}
	}
}
export default {
	title: 'Pages',
	name: 'pages',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Headline',
			name: 'headline',
			type: 'string'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name'
			}
		}
	]
}
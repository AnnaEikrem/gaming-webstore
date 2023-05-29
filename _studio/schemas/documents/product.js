export default {
	title: 'Product',
	name: 'product',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Images',
			name: 'images',
			type: 'array',
			description: 'The first image be the Main Product Image',
			of: [
				{
					name: 'image',
					type: 'image',
					fields: [
						{
							/*
							@todo: Edit the description for alt text, and make it required. 
							 */
							name: 'alt',
							type: 'string',
							description: 'A "why" description of the image. The ALT text is read out to users by screen reader software.'
							// validation: Rule => Rule.required().min(10).max(80)
						}
					]
				}
			]
		},
		{
			title: 'Brand',
			name: 'brand',
			type: 'reference',
			to: [
				{
					type: 'brand'
				}
			]		
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number'
		},
		{
			title: 'Colors',
			name: 'colors',
			type: 'array',
			of: [
				{
				type: 'reference',
				to:
					{
						type: 'color'
					}
				}
			]
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: {
				type: 'category'
			}
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [ 
				{
					type: 'reference',
					to: {
						type: 'tag'
					}
				}
			]
		},
		{
			title: 'Availability',
			name: 'availability',
			type: 'number',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name'
			}
		},
	]
}
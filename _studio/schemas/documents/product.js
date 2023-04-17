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
			title: 'Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Product Images',
			name:'productImages',
			type: 'array',
			of: [
				{
					title: 'Image',
					name: 'image',
					type: 'image'
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
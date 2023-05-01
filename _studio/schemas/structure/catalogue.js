export default Structure => {
	const { divider, editor, list, listItem, documentTypeList, documentTypeListItem } = Structure

	return list()
				.title('Product catalogue')
				.showIcons(false)
				.items([
					documentTypeListItem('product'),

					divider(),

					documentTypeListItem('brand'),
					documentTypeListItem('color'),
					documentTypeListItem('category'),
					documentTypeListItem('tag'),
					documentTypeListItem('pages'),
				])
}
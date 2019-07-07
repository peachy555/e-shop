export default function searchProducts(props) {
	let filteredList = props.search === undefined 
		? props.products 
		: props.products.filter(item => item.name.toLowerCase().includes(props.search.toLowerCase()))
	return filteredList
}
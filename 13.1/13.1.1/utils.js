export function listItems(items) {
	// let names = '';
	//
	// items.forEach(function (item, index) {
	// 	names += item + (index === items.length - 1) ? '' : ' --- ';
	// })
	// return names;

	return items.join(' --- ');
}

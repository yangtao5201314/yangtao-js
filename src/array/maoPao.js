/** 冒泡排序 默认从小到大
 * @method maoPao 数组方法
 * @param {Array} arr 传递的数组
 * @param {String} type 传递的类型默认从小到大不传值，从大到小传递"max"
 */
const maoPao = (arr, type) => {
	let temp;
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	if (type == "max") {
		return arr.reverse();
	} else {
		return arr;
	}
};

export default maoPao;
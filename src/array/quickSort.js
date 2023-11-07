/** 快速排序 从小到大排序
 * @method quickSort 数组方法
 * @param {Array} arr 传递的数组
 */
const quickSort = (arr) => {
	if (arr.length <= 1) return arr;
	let pivotIndex = Math.floor(arr.length / 2),
		pivot = arr.splice(pivotIndex, 1)[0],
		left = [],
		right = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([pivot], quickSort(right));
};

export default quickSort;
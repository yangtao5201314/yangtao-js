/** 在数组中获取最大连续数 并返回出来
 * @method maxlianxu 数组方法
 * @param {Array} arr 传递的数组
 */
const maxlianxu = (arr) => {
    let one = [];
    let zuiZhong = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] === 1) {
            one.push(arr[i]);
        } else {
            one.push(arr[i]);
            let a = [];
            for (let item of one) {
                a.push(item);
            }
            zuiZhong.push(a);
            // 清空数组
            one = [];
        }
    }
    let index = zuiZhong.findIndex((i) => i.length >= 2);
    if (index >= 0) {
        return zuiZhong[index];
    } else {
        return "没有连续数";
    }
};

export default maxlianxu;
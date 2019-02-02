// 将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词
var arr = [".hello",".word",".yi", ".fan", ".zhang"];
var newArr = JSON.parse(JSON.stringify(arr));
console.log(arr.join(""));
console.log(newArr.reverse().join(""));
console.log(arr.join(""));
console.log(newArr.join(""));

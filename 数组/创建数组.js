var number1 = [];     // number.length    0
var number2 = [1,2,3,4,5];  // 5

var number3 = new Array();  // 0
var number4 = new Array(1,2,3,4,5); // 5
var number5 = new Array(10);  // 10

// 推荐使用前两种，效率更高



var objects = [1, "Joe", true, null];
// 判断一个对象是否是数组
Array.isArray(objects);



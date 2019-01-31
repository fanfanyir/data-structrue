// 一、创建二维数组
Array.martix = function(numrows, numcols, initial) {
  var arr = [];
  for (var i = 0; i  < numrows; ++i) {
    var columns = [];
    for (var j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

// 测试代码
var nums = Array.martix(5,5,0);
console.log(nums);
console.log(nums[1][1]);

var names = Array.martix(3,3,"");
names[1][2] = "Joe";
console.log(names[1][2]);

var grades = [[89,77,78],[76,82,81],[91,94,89]];
console.log(grades[2][2]);
// 一、
// 字符串 -> 数组： split()
// 数组 -> 字符串:  join() toString()

// 二、
// 1. 返回新数组  concat()  splice(startIndex, length)--截取一个数组的子集创建一个新数组

// 2. 可变函数 

// (1) 添加首尾元素 push()-添加到末尾  unshift()--添加到数组头部
// (2) 删除首尾元素 pop()--删除末尾的元素   shift()--删除第一个元素    贴心小便签：不接受参数；会自动删除掉逗号；并返回删除的元素
var nums = [2,3,4];
var newnum = 1;
console.log(nums, "原数组");
nums.push(newnum, 2, 3, 4, 5);
console.log(nums, "push()");
nums.unshift(10);
console.log(nums, "unshift(10)");
nums.pop();
console.log(nums, "pop()");
nums.shift();
console.log(nums, "shift()");

// (3) 在数组中间删除/添加元素  splice()：参数
        // a. 起始索引
        // b. 需要删除的元素个数
        // c. 想要添加进数组的元素


// 三、排序
// 1. 翻转 reverse()
// 2. sort() 字符串类型数组时好使
function compare(num1, num2) {
  console.log(num1,num2);
  return num1 - num2;
}

var arr = [3,2,1,100,4,200];
arr.sort(compare);
console.log(arr, "sort")

  // In-place QuickSort algorithm.
  // For short (length <= 22) arrays, insertion sort is used for efficiency.
  // Mozilla/Firefox : 归并排序
  // V8 ：数组长度小于等于 22 的用插入排序，其它的用快速排序
var a = [100, 20, 40, 30, 1, 5, 9, 2, 20, 20, 30, 2];
// 升序
  // 插入排序
  function InsertSortNew(a){
    for (let i = 0; i < a.length -1; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if(a[i] > a[j]){
          [a[i], a[j]] = [a[j], a[i]]
        }
      }
    }
  }
  // 快速排序
  function QuickSortNew(a){
  }
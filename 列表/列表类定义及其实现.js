// 一、列表的抽象数据类型定义：并未指明列表的存储结构

// 列表是一组有序的数据。
// 不包含任何元素的列表称为空列表。列表中包含元素的个数称为列表的 length。
// 在内部实现上： 3 个属性，12 个方法
// 属性
// 1. listSize    列表的元素个数
// 2. pos         列表的当前位置
// 3. length      返回列表的元素个数
// 方法
// 1. clear       请空列表中所有元素
// 2. toString    返回列表的字符串形式
// 3. getElement  返回当前位置的元素
// 4. insert      在现有元素后插入新元素
// 2. append      在列表末尾添加新元素
// 4. remove      从列表中删除元素
// 8. front       将列表的当前位置移动到第一个元素
// 8. end         将列表的当前位置移动到最后一个元素
// 10. next       将当前位置前移一位
// 10. prev       将当前位置后移一位
// 11. currPos    返回列表的当前位置
// 12. moveTo(n)  方法直接移动到第 n 个位置

// 二、实现列表类
// 可以直接实现一个 List 类
function List() {
  this.listSize = 0;
  this.pos = 0;

  this.dataStore = [];  // 初始化一个空数组来保存列表元素
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.next = next;
  this.prev = prev;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;   // 判断给定值是否在列表中
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (var i = 0;i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1)  {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}

// 插入 element 到 after 之后
function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element){
      return true;
    }
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize-1;
}

function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}
 
function getElement() {
  return this.dataStore[this.pos];
}


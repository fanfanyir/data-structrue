// 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法
function record () {
  this.dataStore = [];
  this.add = add;
  this.average = average;
}

function add(temp) {
  this.dataStore.push(temp)
}

function average () {
  var total = 0;
  for(var i = 0;i< this.dataStore.length;i++){
    total += this.dataStore[i];
  }
  return total/this.dataStore.length;
}

var records = new record();
records.add();
records.average();
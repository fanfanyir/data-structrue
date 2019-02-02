// 修改前面出现过的 weeklyTemps 对象，使它可以使用一个二维数组来存储每月的有用数据。
// 增加一些方法用以显示月平均数，具体某一周平均数和所有周的平均数

function weeklyTemps() {
  this.dataStore = dataStore;
  this.add = add;
  this.average = average;
}

function add(mon, temp) {
  var mons = this.dataStore[mon];
  if(mons instanceof Array){
    mons.push(temp);
  }else{
    mons = [];
  }
}

function monAverage (mon) {
  var total = 0;
  for(var i = 0;i< this.dataStore[mon].length;i++){
    total += this.dataStore[mon][i];
  }
  return total/this.dataStore[mon].length;
}

function allAverage () {
  var total = 0;
  for(var i = 0;i< this.dataStore.length;i++){
    total += this.monAverage[i];
  }
  return total/this.dataStore.length;
}
var records = new record();
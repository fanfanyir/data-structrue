// 创建一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词
function parts() {
  this.words = ['h','e','l','l','o'];
  this.concatPart = concatPart;
}

function concatPart() {
  return this.words.join("");
}
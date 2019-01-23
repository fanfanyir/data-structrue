function print (sth)  {
  console.log( sth );
}


for (var i = 0; i < 6; i++){
  print(i)
}

var x = 3;
var y = 1.1;
print(x + y);
print(x * y);
print((x * y).toFixed(2));
print((x + y) * (x - y));
var z = 9;
print(Math.sqrt(z));
print(Math.abs(y/x));
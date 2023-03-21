var a=30;
var b=3;
var c= a++ + b++;
console.log(a);
console.log(b);
console.log(c);

console.log("---------------");

var x=3;
let y=4;
const z= --x + x++ + y-- - --y;
console.log(x);
console.log(y);
console.log(z);

console.log("---------------");

var d=3;
var e= d++ + --d + d-- + "s"
console.log(d);
console.log(e);

console.log("---------------");

var a1=3;
var b1=4;
var c1=5;
var d1=((a1++>=c1--)?3:5)>=2?6:8;
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
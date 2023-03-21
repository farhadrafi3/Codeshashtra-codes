/*function reverseString(string) {
    var reversedString="";
    for(var i=string.length-1;i>=0;i--) {
      reversedString += string[i];
    }
    return reversedString;
  }
  var string="Hello";
  var reversedString=reverseString(string);
  console.log(reversedString)



  var number=[];
  for(var i=0;i<10;i++) {
    var randomNumber=Math.floor(Math.random()*100)+1;
    number.push(randomNumber);
  }  
  console.log(number);

  function sortedArrays(arr1,arr2) {
    var mergedArray=[];
    var i=0;
    var j=0;
    while(i<arr1.length && j<arr2.length) {
      if (arr1[i]<arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
    while(i<arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
    while(j<arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }  
    return mergedArray;
  }
  var array1=[1,3,5,7];
  var array2=[2,4,6,8];
  var mergedArray=sortedArrays(array1,array2);
  console.log("array after merging")
  console.log(mergedArray);

  var a=0;
  var b=1;
  for (var i=0;i<8;i++) {
    var c=a+b;
    a=b;
    b=c;
  }
  console.log(b);*/

  function findUppercase(string) {
    var uppercase=[];
    for(var i=0;i<string.length;i++) {
      if(string[i]==string[i].toUpperCase() && string[i]!=string[i].toLowerCase()) {
        uppercase.push(string[i]);
      }
    }
    return uppercase;
  }
var string="AMazing";
var uppercase=findUppercase(string);
console.log(uppercase); 
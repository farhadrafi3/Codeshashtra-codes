/*var arr=[2,4,5,6,9]
console.log(arr)
arr.push(18) //add item at end.
console.log(arr)
arr.pop() //remove item from end.
console.log(arr)
arr.shift() //remove item from start.
console.log(arr)
arr.unshift(1) //add item at start.
console.log(arr)
var arr1=[1,2,3]
delete arr1[1]
console.log(arr1)

var arr2=[2,3,8,9]
arr2.splice(2,1) //from index 2, remove 1 element.
console.log(arr2)
arr2.splice(2,1,'farhad') //replace 1 element from index 2 with farhad.
console.log(arr2)  
arr2.splice(0,2,7,8,9,10) //from index 0, 2 elements will be removed and replaced by 7,8,9,10.
console.log(arr2)

var arr3=[2,3,4,6,8,9,1,5]
arr3.slice(2,6) //will return elements from index 2 to 6-1.
console.log(arr3)

var arr=[0,3,3,6,8,9]
arr.indexOf(3) //will return 1, because 1st occurence of 3 is present at 1.  
console.log(arr)

function doJob()
{
    console.log("farhad")
}
doJob()
var name_=doJob()
console.log(name_) //Like this, we will also call and print what is in the function.
*/

var arr=[1,2,3,4,5]
var arr2=[...arr]
console.log(arr2) //...= copy elements off arr at arr2

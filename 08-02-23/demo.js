/*const person={
    name:"farhad",
    age:25,
    height:"5ft 8inch"
}
for(var key in person)
{
    console.log(key,person[key])
}

var arr=[2,4,8,6,7,4,9]
for(var val in arr){ //for in loop will return index
    console.log(val,arr[val]) //val is for index, arr[val] for value.
}

const x={
    a:20,
    b:30,
    c:40
}
const y={
    a1:3,
    b1:6,
    c1:9
}
var z=((x.a+y.a1)-(x.b+y.b1)+(x.c+y.c1))

var arr=[3,8,-1,8,9]
var sum=0
for(val in arr){
    sum+=arr[val]
    console.log(sum)

}

var date=new Date() //new keyword is used to create an object.
console.log(date)
var date1=new Date("02-08-2023")
console.log(date1)
var date2 = "02-08-2023"
date2=date2.substring(0,10)
console.log(date2)
var date3 = "02-08-2023"
date3=String(date3)
console.log(date3.slice(0,10))*/

var date=new Date()
console.log(typeof date)
console.log(typeof Date)
console.log(date.toDateString())
console.log(date.getTime())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())


/*var arr=[1,2,3,40,50,6]
var my_map=new Map()
my_map.set("a",10)
my_map.set("b",20)
my_map.set("c",30)
var my_set=new Set()
my_set.add(10)
my_set.add(20)
my_set.add(30)
for(var x in arr){
    console.log(x) //for in loop will give index
}
for(var x of arr){
    console.log(x) //for of loop will give value
}
for(var y in my_map){
    console.log(y) //for map for in will give nothing
}
for(var x of my_map){
    console.log(x[0],"is key",x[1, "is value"]) //for map for of will give key pair value
}
for(var x in my_set){
    console.log(x) //for set for in is meaningless
}
function doJob(arg1,arg2,arg3){
    console.log(arg1,arg2,arg3) //arg1, arg2 will give value, arg3 will give whole set
}
my_set.forEach(doJob)
for(var x of my_set){
    console.log(x) //for of will give value of set
}

class Box{
    constructor(value,next){
        this.value=value
        this.next=null
    }
}
var obj1=new Box(10)
console.log(obj1.value)
console.log(obj1.next)

class Node{
    constructor(value,next){
        this.value=value
        this.next=null
    }
}
var start=new Node(1)
for(var i="a";i<=5;i++){
    var temp_node=new Node(i)
    var temp=start
    while(temp.next!=null){
        temp=temp.next
    }
    temp.next=temp_node
}
var temp=start
while(temp!=null){
    console.log(temp.value)
    console.log(temp.next)
    temp=temp.next
}

class Node{
    constructor(value,next){
        this.value=value
        this.next=null
    }
}
var temp_node=new Node("a")
temp_node.next=new Node("b")
temp_node.next.next=new Node("c")
temp_node.next.next.next=new Node("d")
var temp=temp_node
while(temp!=null){
    console.log(temp.value)
    temp=temp.next
}*/

class Node{
    constructor(val,next){
        this.val = val
        this.next = null
    }
}
var arr = ['a','b','c','d']
var start = null
function generateLinkedList(arr){
    for(var val of arr){
        if(start === null){
            var temp_node = new Node(val)
            start = temp_node
        }else{
            var temp = start;
            while(temp.next != null){
                temp = temp.next
            }
            var temp_node = new Node(val)
            temp.next = temp_node
        }
    }
}
function printList(){
    var temp = start
    while(temp != null){
        console.log(temp.val)
        temp = temp.next
    }
}
function findSize(){
    var temp=start
    var size=0
    while(temp!=null){
        size++
        temp=temp.next
    }
    return size
}
generateLinkedList(arr)
printList()
console.log(findSize())
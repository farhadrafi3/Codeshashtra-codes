/*class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
var start = null  //list is currently empty
function createList(arr){  //convert arr in to a double linked list
    for(var e of arr){
        var new_node = new Node(e)
        if(start === null){
            start = new_node
        }else{
            var temp = start
            while(temp.next !=null){
                temp=temp.next
            }
            temp.next = new_node
            new_node.prev = temp
        }
    }
}
function printList(start){
    var temp = start;
    while(temp !== null){
        console.log(temp.value)
        temp = temp.next
    }
}
function deleteAtEnd(){
    if(start === null){
        console.log("nothing to delete")
    }if(start.next === null){
        start = null
    }
    else{
        var temp = start
        while(temp.next.next != null){
            temp = temp.next
        }
        temp.next = null
    }
}
createList([2,3,1,7])
console.log("The created linked list is:")
deleteAtEnd()
console.log("The linked list after deletion is:")
printList(start)

class Node{
  constructor(value){
    this.value=value;
    this.prev=null;
    this.next=null;
  }
}
class DoublyLinkedList{
  constructor(){
    this.head=null;
    this.tail=null;
    this.length=0;
  }
  push(value){
    var node=new Node(value);
    if(this.length===0){
      this.head=node;
      this.tail=node;
    }else{
      node.prev=this.tail;
      this.tail.next=node;
      this.tail=node;
    }
    this.length++;
  }
}
function mergeList(list1,list2){
  var mergedList=new DoublyLinkedList();
  var current1=list1.head;
  var current2=list2.head;
  while(current1 && current2){
    if(current1.value < current2.value){
      mergedList.push(current1.value);
      current1=current1.next;
    }else{
      mergedList.push(current2.value);
      current2 = current2.next;
    }
  }
  while(current1) {
    mergedList.push(current1.value);
    current1=current1.next;
  }
  while(current2) {
    mergedList.push(current2.value);
    current2=current2.next;
  }
  return mergedList;
}
var list1 = new DoublyLinkedList();
list1.push(2);
list1.push(5);
list1.push(8);
list1.push(11);
var list2 = new DoublyLinkedList();
list2.push(1);
list2.push(3);
list2.push(7);
list2.push(9);
var mergedList=mergeList(list1,list2);
var current=mergedList.head;
console.log("Final Sorted List:")
while(current) {
  console.log(current.value);
  current=current.next;
}

function maxDifference(arr){
  var maxDiff=-1;
  var minValue=arr[0];
  for(var i=1;i<arr.length;i++){
    var diff=arr[i]-minValue;
    if(diff>maxDiff){
      maxDiff=diff;
    }
    if(arr[i]<minValue) {
      minValue=arr[i];
    }
  }
  return maxDiff;
}
var arr=[4,7,2,18,3,6,8,11,21];
var output=maxDifference(arr);
console.log(output)*/

class Node {
  constructor(value) {
    this.value=value;
    this.next=null;
  }
}
class LinkedList {
  constructor() {
    this.head=null;
    this.length=0;
  }
  push(value) {
    var node=new Node(value);
    if (this.head === null) {
      this.head=node;
    }else{
      var current=this.head;
      while(current.next !== null) {
        current=current.next;
      }
      current.next=node;
    }
    this.length++;
  }
}
function deleteAll(list,value) {
  while(list.head !== null && list.head.value === value) {
    list.head=list.head.next;
    list.length--;
  }
  var current=list.head;
  while(current !== null && current.next !== null) {
    if(current.next.value === value) {
      current.next=current.next.next;
      list.length--;
    }else{
      current=current.next;
    }
  }
  return list;
}
var list=new LinkedList();
list.push(1);
list.push(2);
list.push(1);
list.push(4);
console.log("Before deletion -");
var current=list.head;
while(current !== null) {
  console.log(current.value);
  current=current.next;
}
deleteAll(list,1);
console.log("After deletion -");
current=list.head;
while(current !== null) {
  console.log(current.value);
  current=current.next;
}

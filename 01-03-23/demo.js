/*class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
var start=null //if start is null, it means list is empty.
function createList(arr){
    for(var ele of arr){
        if(start===null){
            var temp_node=new Node(ele)
            start=temp_node
        }else{
            var temp=start;
            while(temp.next != null){
                temp=temp.next
            }
            var temp_node=new Node(ele)
            temp.next=temp_node
        }
    }
}
function printList(start){
    var temp = start
    while(temp!=null){
        console.log(temp.value)
        temp=temp.next
    }
}
createList([1,2,5,6,8,9,7])
function addToStart(value){
    var temp_node=new Node(value)
    if(start===null){
        start=temp_node
    }else{
        temp_node.next=start
        start=temp_node
    }
}
function addToEnd(value){
    var temp_node=new Node(value)
    if(start===null){
        start=temp_node
    }else{
        var temp=start
        while(temp.next!=null){
            temp=temp.next
        }
        temp.next=temp_node
    }
}
function deleteFromStart(){
    if(start===null){
        console.log("list is empty, cannot delete.")
    }else{
        start=start.next
    }
}
function deleteFromEnd(){
    if(start===null){
        console.log("list is empty, cannot delete.")
    }else{
    var temp=start
    while(temp.next.next!=null){
        temp=temp.next
    }
    temp.next=null
}
}
addToStart(100)
addToEnd(1000)
printList(start)
console.log("-----")
deleteFromStart()
deleteFromEnd()
printList(start)

class Node
{
    constructor(val)
    {
        this.data=val;
        this.next=null;
    }
}
var start;
function push(new_data)
{
    var new_node = new Node(new_data);
    new_node.next = start;
    start = new_node;
}
function getSize()
{
    var temp = start;
    var count = 0;
    while (temp != null)
    {
        count++;
        temp = temp.next;
    }
    return count;
}
push(1);
push(3);
push(1);
push(2);
push(1); 
console.log(getSize())

class Node{
    constructor(val,next){
        this.val = val
        this.next = null
    }
}
var arr = [1,2,3,4,7,9]
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
console.log("size =",findSize())*/

class Node{
    constructor(val,next){
        this.val = val
        this.next = null
    }
}
var arr = [1,2,3,4,7,9]
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
function insertAtNth(value,pos){
    var new_node=new Node(value)
    var temp=start
    while(pos-2>0){
        temp=temp.next
        pos--
    }
    new_node.next=temp.next
    temp.next=new_node
}
generateLinkedList(arr)
printList()
console.log("insert after pushing node at Nth position.")
insertAtNth(100,3)
printList()
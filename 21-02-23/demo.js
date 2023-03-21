/*var stack=[]
function push(val){
    stack.push(val)
}
function pop(){
    return stack.pop()
}
function printStack(){
    for(var i=0;i<stack.length;i++){
        process.stdout.write(stack[i]+" ")
    }
}
function size(){
    return (stack.length)
}
function peek(){
    if(stack.length==0){
        console.log("stack is empty")
    }
    else{
        console.log(stack[stack.length-1])
    }
}
push(20)
push(30)
push(40)
pop()
printStack()
console.log()
console.log(size())
peek()

var stack=[]
function isPalindrome(string){
    for(var i=0;i<string.length;i++){
        stack.push(string[i])
    }
    var reverseString=""
    while(stack.length>0){
        reverseString+=stack.pop()
    }
    if (string===reverseString){
        console.log("Palindrome")
    }else{
        console.log("Not a palindrome")
    }
}
isPalindrome("abcba")
isPalindrome("abcabc")

function isPalindrome(value){
    var stack=[]
    for(var i=0;i<value.length;i++){
        stack.push(value[i])
    }
    var i=0
    while(stack.length!=0){
        if(value[i]!=stack[stack.length-1]){
            return "Not a palindrome"
        }
        else{
            i+=1
            stack.pop()
        }
    }
    return "Palindrome"
}
console.log(isPalindrome("abccba"))
console.log(isPalindrome("abcdef"))

function doJob(value){
    var stack=[]
    for(var i=0;i<value.length;i++){
        stack.push(value[i])
    }
    var count=(stack.length)/2
    while(count>0){
        stack.pop()
        count-=1
    }
    for(var v of stack){
        console.log(v)
    }
}
doJob("farhad")*/

var queue=[]
function push(val){
    queue.push(val)
}
function pop(){
    return queue.shift()
}
function printQueue(){
    for(var i=0;i<queue.length;i++){
        process.stdout.write(queue[i]+" ")
    }
}
function size(){
    return (queue.length)
}
function peek(){
    if(queue.length==0){
        console.log("stack is empty")
    }
    else{
        console.log(queue[0])
    }
}
push(20)
push(30)
push(40)
pop()
printQueue()
console.log()
console.log(size())
peek()

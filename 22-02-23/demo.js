/*var num=2345
var ans=""
while(num!=0){
    var mod=num%10
    ans+=mod
    num=parseInt(num/10)
}
ans=Number(ans)
console.log(typeof ans)
console.log(ans)

function sortString(value){
    var stack=[]
    for(var i=0;i<value.length;i++){
        if(value[i]!='#'){
            stack.push(value[i])
        }
        else{
            stack.pop()
        }
    }
    console.log(stack)
}
sortString("far##ha#d")
  
function isValid(value){
    var stack=[]
    for(var i=0;i<value.length;i++){
        if(value[i]==='('){
            stack.push(value[i])
        }
        else{
            if(stack.length==0){
                return false;
            }
            else{
                stack.pop();
            }
        }
    }
    if(stack.length==0){
        return true;
    }
    else{
        return false;
    }
}  
console.log(isValid("(())()"))
console.log(isValid("(()"))*/

function sortString(value){
    var queue=[]
    var i=0
    while(i<value.length){
        if(value[i]!='#'){
            queue.push(value[i])
            i+=1
        }
        else{
            i+=2
        }
    }
    console.log(queue)
}
sortString("far#ha#d")

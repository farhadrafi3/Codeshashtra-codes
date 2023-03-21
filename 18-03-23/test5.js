/*function findTriplet(array,target) {
    array.sort((a,b)=>a -b)
    for (var i=0;i<array.length-2;i++) {
      var left=i+1
      var right=array.length-1
      while(left<right) {
        var sum=array[i]+array[left]+array[right]
        if(sum===target) {
          return true;
        }
        else if(sum<target) {
          left++;
        }else {
          right--;
        }
      }
    }
    return false;
  }
  var array=[1,7,4,9,3,-2,-9,65]
  var target=3
  console.log(findTriplet(array,target))

  function maxSubarray(array,size) {
    if(size>array.length) {
      return null;
    }
    var maxSum=0
    var currentSum=0
    for(var i=0;i<size;i++) {
      currentSum+=array[i]
    }
    maxSum=currentSum
    for(var i=size;i<array.length;i++) {
      currentSum+=array[i]-array[i-size];
      if(currentSum>maxSum) {
        maxSum=currentSum
      }
    }
    return maxSum;
  }
  var array=[3,4,7,-8,7,9,0,3,1,6]
  var size=2
  console.log(maxSubarray(array, size))
  
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Node {
    constructor(value) {
      this.value=value;
      this.next=null;
    }
  }
  function linkedList(array) {
    var head=new Node(array[0])
    var current=head
    for(var i=1;i<array.length;i++) {
      current.next=new Node(array[i])
      current=current.next
    }
    var result="";
    current=head;
    while(current!==null) {
      result+=current.value;
      if(current.next!==null) {
        result+="->";
      }
      current=current.next
    }
    return result;
  }
  var array=[10,11,12,13,14]
  console.log(linkedList(array))

  function insideMatrix(matrix,x,y) {
    var n=matrix.length
    return x>=0 && x<n && y>=0 && y<n;
  }
  function findProbability(matrix,x,y,steps) {
    if (!insideMatrix(matrix,x,y)) {
      return 0;
    }
    if(steps===0) {
      return 1;
    }
    var probability=0.0
    var directions=[[0,1],[0,-1],[1,0],[-1,0]]
    for(var i=0;i<directions.length;i++) {
      var nextX=x+directions[i][0]
      var nextY=y+directions[i][1]
      probability+=0.25*findProbability(matrix,nextX,nextY,steps-1)
    }
     return "The alive probability is "+probability;
  }
  var matrix=[
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  var x=0
  var y=0
  var steps=1
  console.log(findProbability(matrix,x,y,steps))*/
  
  function evalPostfix(postfix) {
    var stack=[]
    for(var i=0;i<postfix.length;i++) {
      var current=postfix[i]
      if(!isNaN(current)) {
        stack.push(parseInt(current));
      }else {
        var operand2=stack.pop();
        var operand1=stack.pop();
        switch(current) {
          case "+":
            stack.push(operand1+operand2)
            break;
          case "-":
            stack.push(operand1-operand2)
            break;
          case "*":
            stack.push(operand1*operand2)
            break;
          case "/":
            stack.push(operand1/operand2)
            break;
          case "^":
            stack.push(Math.pow(operand1,operand2))
            break;
        }
      }
    }
    return stack.pop();
  }
  var postfix=["2","3","1","*","+","9","-"]
  console.log(evalPostfix(postfix))
  
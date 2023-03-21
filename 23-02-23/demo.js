/*function sumofElements(arr,val) {
    var sum=0;
    for(var i=0;i<val;i++) {
      sum+=arr[i];
    }
    return sum;
  }
  var arr=[2,9,3,6,5,4];
  console.log(sumofElements(arr,3)); 
  console.log(sumofElements(arr,4));*/
  
  function sumPair(num) {
    var ans=14
    for (var i=0;i<num.length;i+=2) {
      var sum=num[i]+num[i+1];
      if (sum===ans) {
        console.log("yes");
        break;  
      }else{
        console.log("no")
      }
    }
  }
  var arr=[8,6,3,-3,8,9,5];
  sumPair(arr); 
  
  
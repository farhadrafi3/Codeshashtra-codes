/*var a=[[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]];
for (var i in a) 
{
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}

function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
is_perfect(28);

function alphabet_order(str)
{
return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));*/

var a=5
var b=5
var c=20

 if(a+b==c || (a+b)*2==c)
 {
   console.log("It is a mango tree")
 }

 else  
 {
   console.log("It is not a mango tree")

 }

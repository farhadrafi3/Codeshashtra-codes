/*function pattern1(n){
for(var i=1;i<=n;i++)
{
    for(var j=1;j<=i;j++)
    {
        process.stdout.write("*") //it is used if we do not want to go to the next line.
    }
    console.log()
}
}
pattern1(5)

function pattern2(n){
    for(var i=0;i<n;i++)
    {
        for(var j=0;j<n;j++)
        {
            if(j>=(n-i-1))
            {
                process.stdout.write("*")
            }
            else
            {
                process.stdout.write(" ")
            }
        }
        console.log()
    }
    }
    pattern2(5)

function pattern3(n){
    var a=n-1,b=n-1;
    for(var i=0;i<n;i++)
    {
        for(var j=0;j<2*n-1;j++)
        {
            if(j>=a && j<=b)
            {
                process.stdout.write("*")
            }
            else
            {
                process.stdout.write(" ")
            }
        }
        a-=1;
        b+=1;
        console.log()
    }
}
pattern3(5)*/

(()=>{
    console.log("farhad")
})()
/*function x(n){
    if(n<=2)
    return
    console.log(n)
    x(n-1)
    console.log(n+1)
}
x(5)*/

function x(n){
    if(n<=3)
    return
    x(n-1)
    console.log(n)
    x(n-1)
}
x(5)
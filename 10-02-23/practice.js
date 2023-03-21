/*function prime(num){
    if(num<2)
    return "num is not a prime Number"
    for(let i=2;i<num;i++){
    if(num%i==0){
    return "num is not a prime number"
    }
    }
    return "num is a prime number"
    }
    console.log(prime(5))
    console.log(prime(16))

    function evenOdd(num){
        if(num%2==0){
        console.log("Even")
        }
        else
        {
            console.log("Odd")
        }
    } 
    return(evenOdd(3))

    function factorial(num){
        var i,f=1
        for(i=1;i<=num;i++){
            f=f*i
        }
        console.log(f)
    }
    return(factorial(5))*/

    function abc(object) {

        return typeof object[Symbol.iterator] === "function";
        
        console.log(abc(new Map())); console.log(abc(new WeakSet()));
    }
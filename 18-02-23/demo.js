/*class Test{
    constructor(num){
        console.log("object has been created.")
    }
}
var t=new Test()
var t1=new Test()*/

class Test{
    constructor(){
        this.a=2
        this.b=4
        this.c=6
    }
    doJob(){
        console.log("method of the object has been called.")
    }
}
var t=new Test()
console.log(t.a,t.b,t.c)
t.doJob()

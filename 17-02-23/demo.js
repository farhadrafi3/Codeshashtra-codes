/*class Vehicle{
    constructor(numberofTyres,numberofMirrors,isEngineAvailable,isBreakAvailable){
        this.numberofTyres=numberofTyres
        this.numberofMirrors=numberofMirrors
        this.isEngineAvailable=isEngineAvailable
        this.isBreakAvailable=isBreakAvailable
    }
    printDetail(){
        console.log(this.numberofTyres,this.numberofMirrors,this.isEngineAvailable,this.isBreakAvailable)
    }
}
var car=new Vehicle("4","6",true,true)
var bike=new Vehicle("2","2",true,true)
car.printDetail()
bike.printDetail()

class Person{
    constructor(name,email,age,gender){
        this.name=name
        this.email=email
        this.age=age
        this.gender=gender
    }
    printDetail(){
        console.log(this.name,this.email,this.age,this.gender)
    }
}
var sudhanshu=new Person("Sudhanshu,","sudhanshu@gmail.com,","30,","male")
var manisha=new Person("Manisha,","manisha@gmail.com,","23,","female")
var farhad=new Person("Farhad,","farhadrafi3@gmail.com,","25,","male")
sudhanshu.printDetail()
manisha.printDetail()
farhad.printDetail()

const Person={
    printValue:function printValue(name,gender,age){
        console.log(name,gender,age)
    }
}
const p1=Object.create(Person)
p1.printValue("Farhad",'M',"25")*/

class MathematicalOperation{
    add(a,b){
        console.log("Add=", a+b)
    }
    substract(a,b){
        console.log("Substract=", a-b)
    }
    multiply(a,b){
        console.log("Multiplication=", a*b)
    }
    divide(a,b){
        console.log("Division=", a/b)
    }
    modulo(a,b){
        console.log("Modulo=", a%b)
    }
}
var obj= new MathematicalOperation()
obj.add(6,2)
obj.substract(6,2)
obj.multiply(6,2)
obj.divide(6,2)
obj.modulo(6,2)
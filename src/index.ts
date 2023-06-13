interface Number {
    number:number,
    string:string
}

const enum Size{
	Small=1, Medium, Large
}

let mySize: Size = Size.Medium;

// console.log(mySize)

function calculate(income:number):number{
    if(income<=50_000){
        return 0;
    } 
    return 1;
    
}

let  employee:{
    readonly id:number,
    name:string,
    retire: (date:Date)=> void
}= {
    id: 1, 
    name: 'mosh',
    retire:(date:Date)=>{
        console.log(date)
    }
}
console.log(employee)


type Person={
    readonly id:number,
    name:string,
    retire: (date:Date)=> void
}

let newEmplooyee:Person ={
    id:1,
    name:"robert",
    retire:(date:Date)=>{
        console.log(date)
    }
}

//union Types


let arr: Array<number | string> = ['1', 2]
function klgToLbs (weight:number|string):number{
    //narrowing
    if(typeof weight === 'number'){
        return weight   
    }
    return parseInt(weight)*2.2;
}
console.log(klgToLbs('10kg'))
console.log(klgToLbs(10))


//intersection

type Draggable={
    drag: () =>void,
    
}
type Resizeable={
    resize: () =>void
}

type UiWidget= Draggable& Resizeable;

let text: UiWidget={
    drag: () => 'hola',
    resize: () => 'resize'
}

console.log(text)

//literal types



type Quantity = 100 | 10;

let value1:Quantity = 10;

//Option chaining

type Operator= {
    birthday?: Date
}

function getBirth(id:number):Operator| null{
    return  id==0 ? null :{birthday:new Date()};

}

let customer=  getBirth(0);
// Flutter

console.log(customer?.birthday)
console.log(customer?.birthday?.getFullYear)
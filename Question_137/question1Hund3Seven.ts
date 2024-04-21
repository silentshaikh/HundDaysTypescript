//class
// it is a blueprint of object .It is used for creating object properties and methods
class Student{
    constructor(readonly id:number,public name:string,public subject:string){}
    callStudent(){
        console.log(`The name of the student is ${this.name}and his id is ${this.id}.`);
    };
};
let ourStudent:Student = new Student(1,'ben','Computer');
ourStudent.callStudent();

//fucntion
// It is used for reusable code
const funcRes = (a:number,b:number):string => {
    return `Total Calculation is ${a+b}`;
};
let ourFuncRes:string = funcRes(30,4);
console.log(ourFuncRes);

//typeof
// It is used for type Safety
let str:string = 'Hello World';
if(typeof str === 'string'){
    console.log('Yes this is String');
}else{
    console.log('Wrong Type');
}
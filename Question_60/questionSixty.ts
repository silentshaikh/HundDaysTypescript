class Student{
     name:string;
     age:number;
     className:string
    constructor(name:string,age:number,className:string) {
        this.name = name;
        this.age = age;
        this.className = className;
    }
};
let ourStudent:Student = new Student('Ben',10,'Typescript');
console.log(ourStudent)
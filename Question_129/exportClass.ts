class Person{
    constructor(public name:string,public skill:string[],public country:string){}
 callPerson () {
    console.log(`My Name is ${this.name}. My Skills is ${this.skill} .`)
 }
}
export {Person};
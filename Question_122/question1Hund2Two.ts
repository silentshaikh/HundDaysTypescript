interface Stud{
    name:string,
    country:string,
    callName:() => void,
}
let student:Stud = {
    name:'Ben',
    country:'USA',
    callName: function(){
        console.log(`The name of the student is ${this.name}.`);
    },
};
student.callName();
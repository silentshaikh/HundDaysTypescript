interface Stud2{
    name:string,
    country:string,
    callName:() => void,
}
let student2:Stud2 = {
    name:'Ben',
    country:'USA',
    callName: function(){
        console.log(`The name of the student is ${this.name}. He live in ${this.country}.`);
    },
};
student2.callName();
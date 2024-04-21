interface Stud3{
    name:string,
    country:string,
    callName:() => void,
}
// outer function
let student3:Stud3 = {
    name:'Ben',
    country:'USA',
    callName: function(){
        console.log(`The name of the student is ${this.name}. He live in ${this.country}.`);
    },
};
student3.callName();

//inner function
let student4 = {
    name:'Ben',
    country:'USA',
    callName: function(){
        function innerFunc() {
            console.log(`The name of the student is ${this.name}. He live in ${this.country}.`);
                };
        innerFunc();
    },
};
student4.callName();
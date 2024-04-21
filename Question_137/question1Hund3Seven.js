//class
// it is a blueprint of object .It is used for creating object properties and methods
var Student = /** @class */ (function () {
    function Student(id, name, subject) {
        this.id = id;
        this.name = name;
        this.subject = subject;
    }
    Student.prototype.callStudent = function () {
        console.log("The name of the student is ".concat(this.name, "and his id is ").concat(this.id, "."));
    };
    ;
    return Student;
}());
;
var ourStudent = new Student(1, 'ben', 'Computer');
ourStudent.callStudent();
//fucntion
// It is used for reusable code
var funcRes = function (a, b) {
    return "Total Calculation is ".concat(a + b);
};
var ourFuncRes = funcRes(30, 4);
console.log(ourFuncRes);
//typeof
// It is used for type Safety
var str = 'Hello World';
if (typeof str === 'string') {
    console.log('Yes this is String');
}
else {
    console.log('Wrong Type');
}

var Student = /** @class */ (function () {
    function Student(name, age, className) {
        this.name = name;
        this.age = age;
        this.className = className;
    }
    return Student;
}());
;
var ourStudent = new Student('Ben', 10, 'Typescript');
console.log(ourStudent);

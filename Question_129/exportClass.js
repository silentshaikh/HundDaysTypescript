"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, skill, country) {
        this.name = name;
        this.skill = skill;
        this.country = country;
    }
    Person.prototype.callPerson = function () {
        console.log("My Name is ".concat(this.name, ". My Skills is ").concat(this.skill, " ."));
    };
    return Person;
}());
exports.Person = Person;

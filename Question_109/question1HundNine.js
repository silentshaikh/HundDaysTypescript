var personAge = function (age) {
    if (age > 1 && age <= 13) {
        return 'Child';
    }
    else if (age > 13 && age <= 19) {
        return 'Teenager';
    }
    else if (age > 19) {
        return 'Adult';
    }
    else {
        return 'Invalid Age';
    }
    ;
};
var showAge = personAge(7);
console.log(showAge);

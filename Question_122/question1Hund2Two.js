var student = {
    name: 'Ben',
    country: 'USA',
    callName: function () {
        console.log("The name of the student is ".concat(this.name, "."));
    },
};
student.callName();

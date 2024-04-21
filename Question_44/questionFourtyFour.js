var ourLaptop = {
    make: 'Apple',
    model: 'Macbook Pro',
    year: 2023,
    describe: function () {
        console.log("The Name is the laptop is ".concat(ourLaptop.model, ".It is released in ").concat(ourLaptop.year, ". The Company of the laptop is ").concat(ourLaptop.make));
    }
};
ourLaptop.describe();

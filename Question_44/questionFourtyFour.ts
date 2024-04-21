interface Laptop{
    make:string,
    model:string,
    year:number,
    describe:() => void,
}
let ourLaptop:Laptop = {
    make:'Apple',
    model:'Macbook Pro',
    year:2023,
    describe:() => {
        console.log(`The Name is the laptop is ${ourLaptop.model}.It is released in ${ourLaptop.year}. The Company of the laptop is ${ourLaptop.make}`);
    }
};
ourLaptop.describe();
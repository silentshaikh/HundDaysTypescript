interface CarObj1{
    make:string,
    model:string,
    year:number,
    color?:string
}
let carObj1:CarObj1 = {
    make:'Benlty',
    model:'FLying Spur',
    year:2022
};
carObj1.color = 'Blue';
carObj1.year = 2021
console.log(carObj1);
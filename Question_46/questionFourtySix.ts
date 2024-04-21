interface Laptop2{
    make:string,
    model:string,
    year:number,
    price:number,
}
let ourLaptop2:Laptop2[] = [
    {
        make:'HP',
        model:'EliteBook 865',
        year:2022,
        price:1200
    },
    {
        make:'Dell',
        model:'XPS 17',
        year:2024,
        price:1000
    },
    {
        make:'Apple',
        model:'Macbook Pro',
        year:2023,
        price:1800
    },
];
let ourLaptop3: Laptop2[] = [
    { make: "Lenovo", model: "ThinkPad", year: 2021, price: 900 },
    { make: "Asus", model: "ZenBook", year: 2022, price: 1100 },
];
let ourLaptops:Laptop2[] = [...ourLaptop2,...ourLaptop3];
let sortedLaptops:Laptop2[] = ourLaptops.sort((a,b) => a.price-b.price);
console.log(ourLaptops);
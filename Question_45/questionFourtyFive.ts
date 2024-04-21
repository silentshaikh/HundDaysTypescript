interface Laptop1{
    make:string,
    model:string,
    year:number,
}
let ourLaptop1:Laptop1[] = [{
    make:'Apple',
    model:'Macbook Pro',
    year:2023,
},
{
    make:'HP',
    model:'EliteBook 865',
    year:2022,
},
{
    make:'Dell',
    model:'XPS 17',
    year:2024,
}
];
let [oneLaptp,twoLaptop] = ourLaptop1;
console.log(oneLaptp);
console.log(twoLaptop);
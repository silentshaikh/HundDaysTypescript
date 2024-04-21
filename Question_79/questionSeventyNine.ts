interface CarObj3{
    make:string,
    model:string,
    year:number
}
let carObj3:CarObj3 = {
    make:'Benlty',
    model:'FLying Spur',
    year:2022
};
const iterateObj = (obj:any) => {
    for(let x in obj){
        console.log(obj[x])
    }
}
iterateObj(carObj3);
interface Obj3{
    name:string,
    city:string,
    country:string,
}
let ourObj3:Obj3 = {
    name:'Ben',
    city:'Los Angelas',
    country:'USA',
};
let convJsonString3:string = JSON.stringify(ourObj3,null,4);
console.log(convJsonString3);
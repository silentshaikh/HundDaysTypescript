interface Obj{
    name:string,
    city:string,
    country:string,
}
let ourObj:Obj = {
    name:'Ben',
    city:'Los Angelas',
    country:'USA',
};
console.log('Before Convert into String');
console.log(ourObj);
let convJsonString:string = JSON.stringify(ourObj);
console.log('After Convert into String');
console.log(convJsonString);

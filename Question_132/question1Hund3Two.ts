interface Obj2{
    name:string,
    city:string,
    country:string,
}
let ourObj2:Obj2 = {
    name:'Ben',
    city:'Los Angelas',
    country:'USA',
};
console.log('Before Convert into String');
console.log(ourObj2);
let convJsonString2:string = JSON.stringify(ourObj2);
console.log('After Convert into String');
console.log(convJsonString2);
let convJsonParse:Obj2 = JSON.parse(convJsonString2);
console.log('After Convert into Object')
console.log(convJsonParse);
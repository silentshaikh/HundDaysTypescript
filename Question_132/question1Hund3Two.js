var ourObj2 = {
    name: 'Ben',
    city: 'Los Angelas',
    country: 'USA',
};
console.log('Before Convert into String');
console.log(ourObj2);
var convJsonString2 = JSON.stringify(ourObj2);
console.log('After Convert into String');
console.log(convJsonString2);
var convJsonParse = JSON.parse(convJsonString2);
console.log('After Convert into Object');
console.log(convJsonParse);

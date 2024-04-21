var ourObj = {
    name: 'Ben',
    city: 'Los Angelas',
    country: 'USA',
};
console.log('Before Convert into String');
console.log(ourObj);
var convJsonString = JSON.stringify(ourObj);
console.log('After Convert into String');
console.log(convJsonString);

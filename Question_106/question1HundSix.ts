
const compareStr = (a:string,b:string):boolean => {
    return a.toLowerCase() === b.toLowerCase();
};
let checksBool:boolean = compareStr('HELLO','hello');
let checksBool2:boolean = compareStr('hello','world'); 
console.log(checksBool);
console.log(checksBool2); 

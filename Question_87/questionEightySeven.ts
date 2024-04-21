const strIntoNum = (str:string):number =>{
    return Number.parseInt(str);
};
let strToNum:number = strIntoNum('1234');
console.log(strToNum);
// console.log(typeof strToNum)
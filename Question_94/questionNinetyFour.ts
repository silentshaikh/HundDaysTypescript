let sumArr:number[] = [10,20,40,5,3,45,32,60];
let reducSumArr:number = sumArr.reduce((prev:number,curr:number):number => {
    return prev+curr;
},0);
console.log(reducSumArr);
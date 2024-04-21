const checkNotNum = (value:any):boolean => {
    return isNaN(value);
}
let notNum = checkNotNum('str');
console.log(notNum)
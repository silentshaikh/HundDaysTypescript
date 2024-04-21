const removeAndReturnValue = (arr:string[]):string | undefined => {
    let remVal:string | undefined =  arr.pop();
    console.log(arr);
    return remVal;
};
let remAndReturn:string | undefined = removeAndReturnValue(['Apple','Banana','Orange','Guava']);
console.log(remAndReturn);
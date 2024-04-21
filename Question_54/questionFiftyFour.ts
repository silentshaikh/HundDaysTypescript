let mixedArr:any[] = ['Hello',true,null,12,undefined,'World'];
let filtMixedArr:string[] = mixedArr.filter((e) => typeof e === 'string');
console.log(filtMixedArr) 
const promseOne = (str:string) => {
    return new Promise((resolve:(value:string) => void,reject) => {
        setTimeout(() => {
            resolve(str)
        }, 2000);
    })
};
promseOne('Hello World!').then((res:string):void => {
    console.log(res)
})
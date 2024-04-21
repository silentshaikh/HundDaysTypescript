const promseOne = (str:string) => {
    return new Promise((resolve:(value:string) => void,reject) => {
        setTimeout(() => {
            try {
                resolve(str)
            } catch (error) {
                reject(error);
            }
        }, 2000);
    })
};
promseOne('Hello World!').then((res:string):void => {
    console.log(res)
}).catch((error) => {
    console.log(error);
});
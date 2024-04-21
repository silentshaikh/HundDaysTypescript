const funcProm = (val:number) => {
    return new Promise((resolve:(value:number) => void,reject) => {
        let add:number = 5+val;
        resolve(add);
    });
};
const asycAwat = async () => {
    let resOne:number = await funcProm(5);
    let resTwo:number =await funcProm(resOne);
    console.log(resTwo);
}
asycAwat();
// The await keyword plays a crucial role in asynchronous JavaScript, particularly when working with Promises and asynchronous functions (functions that return Promises or are declared with the async keyword).The await keyword allows asynchronous code to be written in a more synchronous manner. When await is used within an async function, it pauses the execution of the function until the awaited Promise resolves, effectively blocking furthe
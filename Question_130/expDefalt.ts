// export default
const funcDefault = (a:number,b:number):void => {
    console.log(a*b);
}
export default funcDefault;
const funcName = (name:string):void => {
    console.log(`Your name is ${name}`);
}
export {funcName};
const addNum = (addOne:number)=>(addTwo:number)=>(addThree:number) =>{
   return addOne+addTwo+addThree;
}
let addThree = addNum(3);
let addFive = addThree(5);
let addSix = addFive(6);
console.log(addSix)
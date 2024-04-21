let numArr:number[] = [20,4,3,5,6,7,2,10,15,78,90];
const filtArr = (num:number) =>{
   return  num>10
}
let numArrFiltCallb:number[] = numArr.filter(filtArr);
console.log(numArrFiltCallb)
// It is an efficient way to filter arrays based on specific criteria defined by a callback function 
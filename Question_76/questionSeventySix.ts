function squareFunc(num:number){
    console.log(num**2)
}
console.log('Function Declarations')
squareFunc(5)
const squareFunc2 = (num:number) => {
    console.log(num**2);
}
console.log('Function Expressions')
squareFunc2(5)
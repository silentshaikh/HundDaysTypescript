let fruitArr:string[] = ['Apple','Banana','Orange','Pineapple'];
let fndIndex = fruitArr.indexOf('Banana');
if(fndIndex !== -1){
    fruitArr[fndIndex] = 'Mango';
}else{
    console.log('The Index. is not Available');
}
console.log(fruitArr);
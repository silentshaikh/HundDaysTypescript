let avergeNum:number[] = [50,60,70,80,90,100,200];
// avergeNum = [];
let sumGrades = avergeNum.reduce((prev:number,curr:number) => {
    return prev+curr;
},0);
// console.log(sumGrades);
let findAverage:number = sumGrades/avergeNum.length;
if(avergeNum.length === 0){
    findAverage = 0;
    console.log('Average : ',findAverage);
}else{
    console.log('Average : ',findAverage.toFixed(2));
}
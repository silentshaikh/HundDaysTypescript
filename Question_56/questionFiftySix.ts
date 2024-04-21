import inquirer from 'inquirer';
let isCondition = true;
let scoreArr:number[] = [];
while(isCondition){
    let giveScore = await inquirer.prompt([
        {name:'score',type:'number',message:'Enter your Score'},
        {name:'confirmScore',type:'confirm',message:'if you completed your score',default:true},
    ]);
    isCondition = giveScore.confirmScore;
        if(!giveScore.score){
            console.log('Please Enter the Score.')
        }else{
            scoreArr.push(giveScore.score);
        }
};
// console.log(scoreArr);
let sumScore:number = scoreArr.reduce((prev,curr) => {
    return prev+curr;
},0);
let averageScore = sumScore/scoreArr.length;
if(scoreArr.length === 0){
    averageScore = 0
    console.log('Average: ',averageScore);
}else{
    console.log('Average: ',averageScore.toFixed(2));
}
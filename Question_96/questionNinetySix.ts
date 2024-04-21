let ourDate:Date = new Date();
let lastDay:Date =  new Date(ourDate.getFullYear(),11,31);
let timeDiff:number = lastDay.getTime()-ourDate.getTime();
let convDaysRemian:number  = Math.round(timeDiff/(1000*60*60*24));
console.log(`The Remaining days in the new year will be ${convDaysRemian} Days.`);
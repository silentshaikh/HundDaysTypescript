let ourDate:Date = new Date();
let date:number = ourDate.getDate();
let month:number  = ourDate.getMonth()+1;
let year:number = ourDate.getFullYear();
let forDate:number | string =  date < 10 ? "0"+date: date;
let forMonth:number | string = month < 10 ? "0"+month: month;
console.log(`${forDate}--${forMonth}--${year}`);
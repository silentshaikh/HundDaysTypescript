//Syncronous vs Asyncronous

//Syncronous
console.log('Hello World');
let syncNum:number = 5+5;
console.log(syncNum);
// The Syncronous Code is executed by line by line. If the task is not completed then wait for it and its complete then executed.

//Asyncronous
setTimeout(() => {
   console.log('Wait for a minute for complete the task'); 
}, 3000);
console.log('Completed')
// The Asyncrous code is executed by non-blocking . They allow the program to continue executing other tasks while waiting for asynchronous operations to complete like Fetch Api and and Network Request.
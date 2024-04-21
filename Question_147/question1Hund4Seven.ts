console.log('Ready');
setTimeout(() => {
    console.log('Steady');
}, 3000);
console.log("Go");

// The Syncronous code like "Ready" and "Go" are executed first but the asyncronous task like setTimeout are not executed immediately but the timeline of setTimeout is completed it is executed.
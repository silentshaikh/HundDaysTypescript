var ourDate = new Date();
var lastDay = new Date(ourDate.getFullYear(), 11, 31);
console.log(lastDay);
var timeDiff = lastDay.getTime() - ourDate.getTime();
var convDaysRemian = Math.round(timeDiff / (1000 * 60 * 60 * 24));
console.log("The Remaining days in the new year will be ".concat(convDaysRemian, " Days."));

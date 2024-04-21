var ourDate = new Date();
var date = ourDate.getDate();
var month = ourDate.getMonth() + 1;
var year = ourDate.getFullYear();
var forDate = date < 10 ? "0" + date : date;
var forMonth = month < 10 ? "0" + month : month;
console.log("".concat(forDate, "--").concat(forMonth, "--").concat(year));

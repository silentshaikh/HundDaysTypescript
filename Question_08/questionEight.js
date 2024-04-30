// Find The Prime Number or not a prime number
// Abdul Moiz
// 22-2-2024
var checkPrime = true;
var isPrime = function (convNumber) {
    for (var i = 2; i < convNumber; i++) {
        if (convNumber % i == 0) {
            checkPrime = false;
            break;
        }
    }
    if (checkPrime) {
        console.log("".concat(convNumber, " is a Prime Number"));
    }
    else {
        console.log("".concat(convNumber, " is a not Prime Number"));
    }
};
isPrime(97);
// Find The Prime Number or not a prime number
// Abdul Moiz
// 22-2-2024
var isEvenOdd = false;
var isEvenOrOdd = function (num) {
    if (num % 2 === 0) {
        isEvenOdd = true;
    }
    else {
        isEvenOdd = false;
    }
    return isEvenOdd;
};
isEvenOrOdd(15);
if (isEvenOdd) {
    console.log('Even Number');
}
else {
    console.log('Odd Number');
}

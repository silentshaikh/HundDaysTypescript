var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ourLaptop2 = [
    {
        make: 'HP',
        model: 'EliteBook 865',
        year: 2022,
        price: 1200
    },
    {
        make: 'Dell',
        model: 'XPS 17',
        year: 2024,
        price: 1000
    },
    {
        make: 'Apple',
        model: 'Macbook Pro',
        year: 2023,
        price: 1800
    },
];
var ourLaptop3 = [
    { make: "Lenovo", model: "ThinkPad", year: 2021, price: 900 },
    { make: "Asus", model: "ZenBook", year: 2022, price: 1100 },
];
var ourLaptops = __spreadArray(__spreadArray([], ourLaptop2, true), ourLaptop3, true);
var sortedLaptops = ourLaptops.sort(function (a, b) { return a.price - b.price; });
console.log(ourLaptops);

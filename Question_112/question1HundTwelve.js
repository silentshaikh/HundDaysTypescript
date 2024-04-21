var ourMap2 = new Map();
ourMap2.set(1, 'Abdul Moiz');
ourMap2.set(2, 'Ahmed');
ourMap2.set(3, 'Ashar');
ourMap2.set(4, 'Sameer');
ourMap2.forEach(function (e, i) {
    console.log("ID: ".concat(i, ", NAME: ").concat(e));
});

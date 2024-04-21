var ourMap2 = new Map();
ourMap2.set('USA', 'Washignton');
ourMap2.set('Pakistan', 'Islamabad');
ourMap2.set('India', 'Delhi');
ourMap2.set('Canada', 'Ottawa');
if (ourMap2.has('Canada')) {
    console.log("".concat(ourMap2.get('Canada'), " is the Capital of Canada."));
}
else {
    console.log('Does not exist in Map Object');
}
;

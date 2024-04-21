var vowelsFind = 'HelloWorld';
var foundVowel = false;
for (var _i = 0, vowelsFind_1 = vowelsFind; _i < vowelsFind_1.length; _i++) {
    var x = vowelsFind_1[_i];
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
        console.log(x);
        foundVowel = true;
        break;
    }
}
;
if (!foundVowel) {
    console.log('No Vowel Found');
}
;

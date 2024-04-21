let vowelsFind:string = 'HelloWorld';
let foundVowel:boolean = false;
for(let x of vowelsFind){
    if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'){
        console.log(x);
        foundVowel = true;
        break;
    }
};
if(!foundVowel){
    console.log('No Vowel Found');
};
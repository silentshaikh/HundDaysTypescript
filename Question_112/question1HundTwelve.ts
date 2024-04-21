let ourMap2:Map<number,string> = new Map();
ourMap2.set(1,'Abdul Moiz');
ourMap2.set(2,'Ahmed');
ourMap2.set(3,'Ashar');
ourMap2.set(4,'Sameer');
ourMap2.forEach((e,i) => {
    console.log(`ID: ${i}, NAME: ${e}`);
});

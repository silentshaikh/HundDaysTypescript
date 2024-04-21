const rstParam = (name:string,...hobby:string[]):void => {
    hobby.forEach((e) => {
        console.log(`${name}, You Enjoy that ${e}.`);
    });
};
rstParam('Ben','Coding','Cricket','Games','Travelling',)
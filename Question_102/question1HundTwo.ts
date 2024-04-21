const randColorGen = ():string => {
    let rand:number = Math.floor(Math.random()*16777215);
    let randCode:string = `#${rand.toString(16)}`;
    return randCode;
};
let randColor:string = randColorGen();
console.log(randColor);
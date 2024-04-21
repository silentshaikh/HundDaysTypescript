const diceRoll = ():void => {
    let randDice:number = Math.floor(Math.random()*6+1);
    console.log(randDice);
};
diceRoll();
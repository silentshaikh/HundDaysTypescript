const multDecimal = (one:number,two:number) => {
    console.log('Before Round of')
    console.log(one*two);
    console.log('After Round of')
    console.log(Math.round(one*two));
}
multDecimal(67.98,77.801);
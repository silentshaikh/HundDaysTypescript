//Traditional Function
let tradFunc = function(a:number,b:number):void {
    console.log(`Traditional Function : ${a+b}`);
};
tradFunc(5,6);

// Arrow Function
let arrowFunc = (a:number,b:number):void => {
    console.log(`Arrow Function : ${a+b}`);
};
arrowFunc(5,6);
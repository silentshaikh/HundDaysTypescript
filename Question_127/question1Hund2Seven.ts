let tradFunc2 = function(){
    console.log(this);
}
tradFunc2();


let arrowFunc2 = () =>{
    console.log(this);
}
arrowFunc2();
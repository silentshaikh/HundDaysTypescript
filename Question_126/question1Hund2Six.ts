const multParam = (...numArr:number[]) => {
    let productArr = numArr.reduce((prev,curr) => {
        return prev*curr;
    });
    console.log(productArr)
}
multParam(5,6,7,8);
interface SmartPhone{
    brand:string,
    model:string,
    storage:{
        ram:string,
        rom:string,
    },
    battery:{
        timing:string,
        mah:string
    },
    screenSize:{
        inches:string,
    }
}
let smartPhone:SmartPhone = {
    brand:'IPhone',
    model:'15 Pro Max',
    storage:{
        ram:'8GB',
        rom:'128GB'
    },
    battery:{
        timing:'3 Hours',
        mah:'4000mah'
    },
    screenSize:{
        inches:'6.69 inches'
    }
}
console.log(smartPhone);
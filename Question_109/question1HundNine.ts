const personAge = (age:number):string => {
    if(age>1 && age<=13){
        return 'Child';
    }else if(age>13 && age <=19){
        return 'Teenager';
    }else if(age>19){
        return 'Adult';
    }else{
        return 'Invalid Age';
    };
};
let showAge:string = personAge(7);
console.log(showAge)
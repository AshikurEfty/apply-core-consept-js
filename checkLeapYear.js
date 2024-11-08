function isLeapYear (year){
    const remainder = year % 4;
    if(remainder == 0){
        return true;
    }
    else{
        return false;
    }
}
const thisLeapYear=isLeapYear(1281);
console.log(thisLeapYear);
const thisLeapYear2=isLeapYear(1996);
console.log(thisLeapYear2);
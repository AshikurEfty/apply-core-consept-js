
var num1, num2, num3;

function result(num1,num2,num3){
    if(num1>num2 && num1>num3){
        // console.log(num1,'num1 is max');
        return num1 +'num1 is max';
    }
    else if(num2>num1 && num2>num3){
        // console.log(num2,'num2 is max');
        return num2 +' num2 is max';
    }  
    else{
        // console.log(num3,'num3 is max');
        return num3 +'num3 is max';
    }

}
const result2=result(30,50,45);
console.log(result2);



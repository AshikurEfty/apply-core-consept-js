function maxInArray(numbers){
    let largest = numbers[0];
    for(let i=0; i< numbers.length; i++){
        const index=i;
        const element=numbers[index];
        if(element>largest){
            largest=element;
        }
        return largest;
    }

}
const heights = [123, 34, 456, 67,756];
const tallest = maxInArray(heights);
console.log('tallest person is:', tallest);
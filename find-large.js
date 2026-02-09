// Find Largest Number Without using Math.max.
function findLarge(numbers) {
    let largeNumber = numbers[0];
    for (let i = 0; i<numbers.length; i++){
        if(numbers[i]>largeNumber){
            largeNumber = numbers[i];
        }
    }
    return largeNumber;
}
const myArr = [10, 5, 20, 8];
console.log(findLarge(myArr));
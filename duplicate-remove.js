// Return a new array without duplicates.
function removeDuplicate(arr){
    let withoutDuplicate = [];
    for (let elements of arr){
        if (!withoutDuplicate.includes(elements)){
            withoutDuplicate.push(elements);
        }
    }
    return withoutDuplicate;
}
const myArray = [1,2,2,3,4,4];
console.log(removeDuplicate(myArray));
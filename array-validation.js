// Return "Invalid" if input is not an array.
function arrayValidation(arr){
    if (!Array.isArray(arr)){
        return 'Invalid';
    }
    return 'Valid Input';
}
const invalidInput = "I am an array";
const validArray = ["I", "am", "an", "array"];

console.log(arrayValidation(invalidInput));
console.log(arrayValidation(validArray));
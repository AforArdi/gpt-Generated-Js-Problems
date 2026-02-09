// Write a function that returns the sum of all even numbers in an array.
function sumOfEven(numbers) {
    let evenNumbers = [];
    let sumOfEvenNumbers = 0;

    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    for (let even of evenNumbers) {
        sumOfEvenNumbers += even;
    }
    return sumOfEvenNumbers;
}

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 12];
console.log(sumOfEven(myArr));
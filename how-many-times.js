// Count how many times a value appears.
function howManyTimes(numbers, number) {
    let count = 0;
    // let sameNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === number) {
            count++;
        }
    }
    return count;
}

const ourArr = [1, 2, 3, 2, 4, 2];
console.log(howManyTimes(ourArr, 2));
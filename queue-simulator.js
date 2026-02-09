function queue(numbers, number) {
    numbers.push(number);
    numbers.shift();
    return numbers;
}

const numbers = [1, 2, 3, 4];
console.log(queue(numbers, 5));
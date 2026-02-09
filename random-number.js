// Generate a random number between 1000–9999.

function random(min, max) {
    let randomNumbers = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumbers;
}

console.log(random(1000, 9999));
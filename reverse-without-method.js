// Reverse a String (without reverse)
function reverseMe(str){
    let letters = str.split('');
    let newArr = [];
    for (let letter of letters){
        newArr.unshift(letter);
    }
    let newStr = newArr.join('');
    return newStr;
}

const myName = "ardi";
console.log(reverseMe(myName));
// length >= 6
// must contain a number
function check(str) {
    let passLength = str.length;
    let hasNumber = false;
    let reasons = [];

    if (passLength < 6) {
        reasons.push("Must be 6 character");
    }

    for (let i = 0; i < passLength; i++) {
        let char = str[i];
        if (char >= '0' && char <= '9'){
            hasNumber = true;
        }
    }
    
    if (!hasNumber){
        reasons.push("Must Contian one number");
    }
    let isValid = reasons.length === 0;
    return {
        valid: isValid,
        reasons
    }
}

const myPass = "heler";
console.log(check(myPass));
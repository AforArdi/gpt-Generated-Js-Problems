// text stats
function textStats(str){
    let wordArr = str.split(' ');
    let characterCount = 0;
    let wordCount = 0;
    for (let char of str){
        if(char !== ' '){
            characterCount++;
        }
    }
    let newArr = str.trim().split('/\s+/');
    for (let word of wordArr){
        wordCount++;
    }
    return {
        words: wordCount,
        character: characterCount
    }
}

const myMessage = "I love JavaScript";
console.log(textStats(myMessage));

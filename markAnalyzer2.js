// Return the subject name with highest marks.
function marksAnalyzer2(marks) {
    let highestMark = -Infinity;
    let highestSubject = null;
    for (let mark in marks){
        let value = marks[mark];
        if(value > highestMark){
            highestMark = value;
            highestSubject = mark;
        }
    }
    return highestSubject;
}
const marks = {
    math: 80,
    english: 70,
    physics: 90
}
console.log(marksAnalyzer2(marks));
function marksAnalyzer(marks) {
    let totalSubjects = Object.keys(marks).length;
    let total = 0;

    for (let mark in marks) {
        total += marks[mark];
    }
    let average = total / totalSubjects;

    return {
        total,
        average
    }
}

const marks = {
    math: 80,
    english: 70,
    physics: 90
}

console.log(marksAnalyzer(marks));
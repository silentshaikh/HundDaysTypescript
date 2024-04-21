var findGrade = function (score) {
    if (score >= 80 && score <= 100) {
        return 'A';
    }
    else if (score >= 70 && score < 80) {
        return 'B';
    }
    else if (score >= 60 && score < 70) {
        return 'C';
    }
    else if (score >= 50 && score < 60) {
        return 'D';
    }
    else if (score >= 40 && score < 50) {
        return 'E';
    }
    else if (score < 40) {
        return 'F';
    }
    else {
        return 'Invalid score';
    }
};
var showGrade = findGrade(80);
console.log(showGrade);

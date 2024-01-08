const sumAll = function(a, b) {

    if (!isValidNumber(a) || !isValidNumber(b)) {
        return "ERROR";
    }

    let small = Math.min(a, b);
    let large = Math.max(a, b);
    let result = 0;

    for (let i = small; i <= large; i++) {
        result += i;
    }

    return result;
};

function isValidNumber(num) {
    return typeof num === 'number' && num >= 0;
}

// Do not edit below this line
module.exports = sumAll;

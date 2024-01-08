const leapYears = function(year) {
    // Either not divisible by 100 or divisible by 400 (which implies it is also
    // divisible by 100 since 100 is a factor of 400)
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;

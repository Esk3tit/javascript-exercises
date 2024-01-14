const fibonacci = function(fib) {
    if (typeof fib === "string") fib = Number(fib);
    if (fib < 0) return "OOPS";

    const fibArray = [0, 1, 1];

    for (let i = 3; i <= fib; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }

    return fibArray[fib];
};

// Do not edit below this line
module.exports = fibonacci;

const palindromes = function (str) {
    // Lowercase string, two pointers, skip over whitespace and punctuation
    sanitizedStr = str.toLowerCase();
    let l = 0;
    let r = sanitizedStr.length - 1;

    while (l < r) {
        if (sanitizedStr[l].match(/[^a-z0-9]/)) {
            l++;
            continue;
        }
        if (sanitizedStr[r].match(/[^a-z0-9]/)) {
            r--;
            continue;
        }
        if (sanitizedStr[l] !== sanitizedStr[r]) return false;
        l++;
        r--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

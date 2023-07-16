const palindromes = function (string) {
    let modified = string.toLowerCase().split("").filter(char => /[a-z0-9]/.test(char)).join("");;
    let stringForward = modified;
    let stringBackward = modified.split("").reverse().join("");

    if (stringForward === stringBackward) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

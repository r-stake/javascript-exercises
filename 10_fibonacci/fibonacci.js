const fibonacci = function(num) {
    if (num < 0) return "OOPS"
    let sequence = [];
    for (let i = 0; i < +num; i++) {
        let result = sequence[i - 1] + sequence[i - 2];
        if (!result) {
            sequence.push(1);
        } else {
            sequence.push(result);
        }
        
    }
    return sequence[+num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

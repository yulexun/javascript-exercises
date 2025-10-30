const sumAll = function(a, b) {
    if (a > 0 && b > 0 
        && Number.isInteger(a) 
        && Number.isInteger(b)) {
        let sum = 0;
        let min = Math.min(a, b);
        let max = Math.max(a, b);
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;

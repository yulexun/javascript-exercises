const palindromes = function (str) {
    let original = str.toLowerCase();
    let reversed = "";

    for (let i = original.length - 1; i >= 0; i--) {
        if (original.match(/[a-z]/i)) {
                reversed += original[i];
        }
    }
    console.log(original);
    console.log(reversed);
    return original == reversed;
};

// Do not edit below this line
module.exports = palindromes;

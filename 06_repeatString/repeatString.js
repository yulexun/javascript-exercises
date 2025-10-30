const repeatString = function(text, num) {
    let newtext = text;
    if (num < 0) {
        return "ERROR";
    } else if (num === 0) {
        return "";
    } else {
    for (let i = 0; i < num - 1; i++) {
    newtext = newtext + text;
    }  
     return newtext;
    }


};

// Do not edit below this line
module.exports = repeatString;

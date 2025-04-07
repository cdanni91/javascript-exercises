const reverseString = function(word) {
    const arrayWord = word.split("");
    let reverseWord = [];

    for (let i = arrayWord.length - 1; i >= 0; i--) {
        reverseWord.push(arrayWord[i]);
    }

    reverseWord = reverseWord.join("");

    return reverseWord;
};

console.log(reverseString('hello there')); // Output: ["e", "r", "e", "h", " ", "o", "l", "l", "e", "h"]


// Do not edit below this line
module.exports = reverseString;

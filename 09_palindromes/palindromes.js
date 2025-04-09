function reverseWord (word) {

    let testWord = '';

    let splitWord = word.split('');
    let reversedWord = splitWord.reverse();
    let joinWord = reversedWord.join('');

    return joinWord;

}


function palindromes (word) {

    word = cleanWord(word);

    let reversedWord = reverseWord(word);

    


    if (word === reversedWord) {

        console.log ('Es')

        return true;

    } else {
        console.log ('No es')
        return false;
    }

};

function cleanWord (word) {

    word = word.replace(/[.@,\/#!$%\^&\*;:{}=\-_`~()" "]/g,"");

    word = word.toLowerCase();

    cleanedWord = word;

    console.log(cleanedWord);


    return cleanedWord;
}





wordToTest = 'Animal loots foliated detail of stool lamina.'


palindromes(wordToTest);


// Do not edit below this line
module.exports = palindromes;

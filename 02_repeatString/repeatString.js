

const repeatString = function(string, num) {

    let word = '';

    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            word = word + string ;
        }
    }

    return word;

    };

randomNumber = Math.floor((Math.random()*1000));

repeatString('', randomNumber);



// Do not edit below this line
module.exports = repeatString;

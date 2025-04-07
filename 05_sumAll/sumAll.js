const sumAll = function(firstNumber, secondNumber) {

    /* Check if A and B are positive integers */

    if (typeof firstNumber !== "number" || !Number.isInteger(firstNumber) || firstNumber <= 0) {

        return 'ERROR';

    } else { console.log('OK') }

    if (typeof secondNumber !== "number" || !Number.isInteger(secondNumber) || secondNumber <= 0) {

        return 'ERROR';

    } else { console.log('OK') }


    /* Start the logic of the program */

    let biggerNumber = 0;
    let smallerNumber = 0;
    
    let result = 0;

        /* Check wich number is bigger and assign it to the variable bigger and smaller number */

    if ( firstNumber > secondNumber ) {
        biggerNumber = firstNumber;
        smallerNumber = secondNumber;
    } else {
        biggerNumber = secondNumber;
        smallerNumber = firstNumber;
        
    }
  

    let thirdNumber = smallerNumber;

    result = smallerNumber;

    for (let i = 0; i < biggerNumber-smallerNumber; i++) {

        thirdNumber += 1;

        result += thirdNumber;

        /* console.log(result); */

    }

    console.log(result);

    return result;

};

sumAll(2,6);

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function(number) {

    let a = 0;
    let b = 1;
    let c = a + b;
    let result = 0;


    if (number < 0) {

        return 'OOPS';

    } else if (typeof(number) === 'string') {
        Number(number);
    }

    for (let i = 0; i < number; i++) {

        if(i !== 0) {

            result = a + b;

            a = b;
            b = c;
            c = a+b ;

            
        } else {

            result = a + b;

        }

      console.log(result);



        
    }

    return result;

};

fibonacci(-5);

// Do not edit below this line
module.exports = fibonacci;

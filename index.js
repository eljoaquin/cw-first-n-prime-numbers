
function Primes() {

}

Primes.prototype.first = function(number) {

    if(1 === number) {
        return [2];
    } else if(2 === number) {
        return [2, 3];
    } else if(number > 2) {
        var currentPrimeNumber = 3;
        var primeNumbers = [2, 3];

        while(primeNumbers.length < number) {
            currentPrimeNumber += 1;


            var addPrimeNumber = true;
            primeNumbers.forEach(function(primeNumber) {
                if(currentPrimeNumber % primeNumber === 0) {
                    addPrimeNumber = false;
                }
            });

            if(addPrimeNumber) {
                primeNumbers.push(currentPrimeNumber);
            }
        }

        return primeNumbers;
    }
    return [];
};

module.exports = new Primes;

https://www.codewars.com/kata/535bfa2ccdbf509be8000113/train/javascript
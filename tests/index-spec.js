var expect = require('chai').expect;

describe('First n Prime Numbers', function() {


    var Primes = require('./../index');

    it('should exits', function() {
        expect(Primes).to.be.defined;
    });

    it('it have property "first"', function() {
        expect(Primes).to.respondTo('first');
    });

    it('it have to return an empty array when there is not argument', function() {
        expect(Primes.first()).to.eql([]);
    });

    it('it have to return an empty array when the argument is 0', function() {
        expect(Primes.first(0)).to.eql([]);
    });

    it('it have to return an empty array when the argument is -1', function() {
        expect(Primes.first(-1)).to.eql([]);
    });

    it('it have to return an array with 2 when the argument is 1 ', function() {
        expect(Primes.first(1)).to.eql([2]);
    });

    it('it have to return an array with 2,3 when the argument is 2 ', function() {
        expect(Primes.first(2)).to.eql([2, 3]);
    });

    it('is have to return an array with 2,3,5 when the argument is 3', function() {
        expect(Primes.first(3)).to.eql([2, 3, 5]);
    });
});
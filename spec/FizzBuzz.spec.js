var FizzBuzzOf = require('../lib/fizzBuzz').FizzBuzzOf

describe("FizzBuzzOf execution", function () {

    it("should return 1 at the beginning with parameter 1", function () {
        expect(FizzBuzzOf(1)).toBe("1");
    });
 	it("should return 2 at the beginning with parameter 2", function () {
        expect(FizzBuzzOf(2)).toBe("2");
    });

    it("should return Fizz at the beginning with parameter 3", function () {
        expect(FizzBuzzOf(3)).toBe("Fizz");
    });
     it("should return Buzz at the beginning with parameter 5", function () {
        expect(FizzBuzzOf(5)).toBe("Buzz");
    });
     it("should return FizzBuzz at the beginning with parameter 15", function () {
        expect(FizzBuzzOf(15)).toBe("FizzBuzz");
    });
});
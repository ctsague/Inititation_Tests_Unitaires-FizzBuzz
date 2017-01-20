var FizzBuzz = function () {
    for (var i = 1; i <= 100; i++) {
        var affichage = FizzBuzzOf(i);
        console.log(affichage);
    }
};

var FizzBuzzOf = function (n) {
    return "1"
};

module.exports = {
    FizzBuzz: FizzBuzz,
    FizzBuzzOf: FizzBuzzOf
};
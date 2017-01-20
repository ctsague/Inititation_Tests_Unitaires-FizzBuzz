var FizzBuzz = function () {
    for (var i = 1; i <= 100; i++) {
        var affichage = FizzBuzzOf(i);
        console.log(affichage);
    }
};

var FizzBuzzOf = function (n) {      
    if (n===3) {
    	return "Fizz";
    }else{
    	return n.toString();

    }

};

module.exports = {
    FizzBuzz: FizzBuzz,
    FizzBuzzOf: FizzBuzzOf
};
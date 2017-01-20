var FizzBuzz = function () {
    for (var i = 1; i <= 100; i++) {
        var affichage = FizzBuzzOf(i);
        console.log(affichage);
    }
};

var FizzBuzzOf = function (n) {      
    if(n%3===0 && n%5===0){
    	return "FizzBuzz";
    }
    else if (n%3===0) {
    	return "Fizz";
    }else if (n%5===0){
    	return "Buzz";
    }
    	return n.toString();
   
};

module.exports = {
    FizzBuzz: FizzBuzz,
    FizzBuzzOf: FizzBuzzOf
};
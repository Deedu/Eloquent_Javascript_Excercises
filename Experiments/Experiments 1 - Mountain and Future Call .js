
/**
 * Created by DavidDaugela on 2016-05-29.
 */
console.log("If by 2020", future(), "I will have to make some.");
var landscape = function() {
    var result = "";
    var flat = function(size) {
        for (var count = 0; count < size; count++)
            result += "_";
    };
    var mountain = function(size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += "'";
        result += "\\";
    };

    flat(1);
    mountain(7);
    flat(1);
    mountain(2);
    flat(2);
    return result;
};

console.log(landscape());

console.log("The future says:", future());

function future() {
    return "We STILL have no flying cars.";
}
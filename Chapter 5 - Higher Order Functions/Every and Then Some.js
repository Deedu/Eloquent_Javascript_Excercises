/**
 * Created by DavidDaugela on 2016-08-02.
 */
var every = function(array, predicate) {
    for (var i = 0; i <= array.length ; i++) {
        if (predicate ( array[i] ) == false) {
            return false
        }

    }
    return true

};


var some = function(array, predicate) {
    for (var i = 0; i < array.length ; i++) {
        if (predicate ( array[i] ) == true) {
            return true
        }

    }
    return false

};


console.log(some([2, 3, 4], isNaN));
// → false
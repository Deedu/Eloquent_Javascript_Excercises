/**
 * Created by DavidDaugela on 2016-08-10.
 */
function fibPoly (n) {

    var array;
    array = [0, 1];
    var index = n;

    if (n = 0) { function() {
        return 0;
        }
    }

    if (n = 1) {
        function () {
            return 0
        }
    }


        // Everything else
    }

    else {
        array.push(fibPoly(index - 1) + fibPoly(index - 2));
    }
    return array[n];
}

console.log(fibPoly(3));
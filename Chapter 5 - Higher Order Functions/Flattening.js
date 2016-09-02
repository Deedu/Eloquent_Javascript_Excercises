/**
 * Created by DavidDaugela on 2016-08-01.
 */


var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(cur,next) {
    return cur.concat(next);
}, []));
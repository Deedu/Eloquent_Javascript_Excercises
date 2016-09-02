/**
 * Created by DavidDaugela on 2016-06-20.
 */
function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest: list};
    return list;
}

console.log(arrayToList([10,20]));
console.log(arrayToList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]));
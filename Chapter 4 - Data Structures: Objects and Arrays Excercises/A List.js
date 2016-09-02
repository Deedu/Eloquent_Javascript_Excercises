/**
 * Created by DavidDaugela on 2016-06-11.
 */
function arrayToList (array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) 
    
        list = {value: array[i] + " \n" , rest: list };
        return list;
}
console.log(arrayToList([1,2,3,4,5]));
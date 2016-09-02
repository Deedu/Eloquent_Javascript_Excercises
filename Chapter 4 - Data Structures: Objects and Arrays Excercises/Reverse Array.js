/**
 * Created by DavidDaugela on 2016-06-11.
 */


function reverseArray (inputArray)
{
    var outputArray = [];
    
    for (var i = 0 ; i < inputArray.length; i++) {
        outputArray.unshift(inputArray[i]);
    }
   
    return outputArray;
    
}

console.log(reverseArray(["A","B","C","D","E"]));

function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArrayInPlace(["1","2","3"]));
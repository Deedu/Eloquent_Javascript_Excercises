/**
 * Created by DavidDaugela on 2016-08-10.
 */
function fibExp(array){
    var output= [];
    for (var i =0; i<= array.length ; i++){
       // Two unique conditions (n=0 && n=1)
        if (array[i] = 0) {
            output.push(0);
        }
        else if (array[i] = 1) {
            output.push(1);
        }

        //everything else
       else {
           output.push(fibExp(n-1) + fibExp(n-2));
        }
    }

    return output;
}

function range(start, end, step) {
    if (step == null) {
        step =1
    }
    var array = [];

    //counting up
    if (step > 0) {
        {
            for (var i = start; i <= end; i += step)
                array.push(i);
        }
    }
    //counting down
    if (step < 0 ) {
        for (var i = start; i >= end; i += step)
            array.push(i);
    }
    return array
}

console.log(fibExp([3]));


console.log((range(1,2)));
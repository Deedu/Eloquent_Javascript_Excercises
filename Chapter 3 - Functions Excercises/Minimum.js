/**
 * Created by DavidDaugela on 2016-05-30.
 * @return {string}
 */
function Min (x, y ) {
    if (x > y) {
        return y
    }
    else if (x==y) {
        return "Inputs are equal: " + x
    }
    else {
        return x
    }
}   

console.log(Min(10,80));
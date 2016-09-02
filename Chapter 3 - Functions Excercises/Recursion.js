/**
 * Created by DavidDaugela on 2016-05-30.
 */
function isEven(number) {
    var result = number ;
    while (result > 1)
        result= result - 2;
    if (result== 1) {
        return "false"
    }  
    else if (result ===0) {
        return "true"
    }
    else {
        return "Negative / Decimal value"
    }
}
console.log(isEven(10));
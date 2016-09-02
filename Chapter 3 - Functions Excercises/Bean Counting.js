/**
 * Created by DavidDaugela on 2016-06-02.
 */
var countChar = function (inputText, character) {
    var count = 0;
    for (i=0 ; i<= inputText.length ; i++)
        if (inputText.charAt(i) == character )
        {count +=1;}
    return count;

}
console.log(countChar("eeeeeeeeeeeeeeeeeeasdfAAAAASDFASDFEEFEFEFE","e" ));
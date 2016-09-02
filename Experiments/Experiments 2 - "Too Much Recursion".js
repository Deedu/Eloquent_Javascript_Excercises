/**
 * Created by DavidDaugela on 2016-05-30.
 */
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + " came first.");
// → ??


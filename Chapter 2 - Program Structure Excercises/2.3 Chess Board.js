/**
 * Created by DavidDaugela on 2016-05-28.
 */
var size = 7;

var board = "";

for (var y = 0; y <= size; y++) {
    for (var x = 0; x <= size; x++) {
        if ((x + y) % 2 === 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);
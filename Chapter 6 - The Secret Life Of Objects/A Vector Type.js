/**
 * Created by DavidDaugela on 2016-08-19.
 */

//Constructor
 function Vector (x0,y0){
        this.x = x0;
        this.y = y0;
    }

//Vector Addition
Vector.prototype.plus= function (other) {
   return new Vector(this.x + other.x, this.y + other.y)
};

//Vector Subtraction
Vector.prototype.minus= function (other) {
    return new Vector(this.x - other.x, this.y - other.y)
};

// Vector distance from (0,0)
Object.defineProperty(Vector.prototype, "length",{
    get: function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y ))
    }
});



//Vector Values
var firstVector = new Vector(1,2);
var secondVector = new Vector(1,1);



console.log(new Vector(1,2).plus(new Vector(1,1)));

console.log(firstVector.length);

console.log(new Vector(1,2).minus(new Vector(1,1)));


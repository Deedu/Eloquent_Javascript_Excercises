/**
 * Created by DavidDaugela on 2016-05-28.
 */
for (var count = 0 ; count <=100; count= count + 1)
    { if (count % 3 === 0 &&  count % 5 === 0) {
        console.log("FizzBuzz")
    } 
    else if (count % 3 === 0) {
        console.log("Fizz");        
}
   else if (count % 5 === 0)     {
        console.log("Buzz");
    }
   else {
        console.log(count);
        count = count + 1;
    }     
    }
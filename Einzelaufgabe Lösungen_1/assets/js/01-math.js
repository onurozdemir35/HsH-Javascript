/**
 * VARIABLES
 */
const three = 3;
const six = 6;

console.log("Hallo", 10, six);

var x = 10;
var x = "10";
var x = "10";

// add six to three

console.log("6 + 3 ergibt = ", six + three);

// subtract six from three
console.log("6 - 3 ergibt = ",six - three );
// multiply three times six
console.log("6 * 3 ergibt = ", six * three);
// divide three by six
console.log("6 / 3 ergibt = ", six / three);
// modulo six by three
console.log("6 % 3 ergibt = ", six % three);
// log results
console.log("log results sind",  six + three, six - three, six * three, six / three, six % three);

// build a function, that:
// takes two parameters
function math(x, y) {
// checks if both parameters are numbers, else returns error message in the console
    if (typeof x !== "number" || typeof y !== "number") {
    
       console.error("the both parameters are not number!!!") ;
       
    }
// divides the first one by the second one
    var divide =  x/y;
    console.log ("Ergebnis von teilen ist : ", x/y);
// adds three to the result of the division
    var addthree = divide + 3;
    console.log("add three : ", addthree);
// multiplies the result by the second parameter
    var multiple = addthree * y;
// when the result is equal to 21, subtract 4
// else add 4
// and then returns the result
    var result = 0;
    if (multiple == 21) {
        result =  multiple - 4 ;
    } else  {
        result =  multiple + 4;
    }

// log the result of the function
    console.log("Return is : ", result);
    return result;

}

math(5, 2);
"use strict";

// there is one parameter "p"
function duplication(p) {
    // in this example, we change the parameter's value
    p = "NoGo";
    alert("in function: " + p);
    return p + "!";
}

let x = "Go";
const ret = duplication(x);

// is the modifications of the argument done in the function visible here? No
alert("Return value: " + ret + " " + "Variable: " + x)

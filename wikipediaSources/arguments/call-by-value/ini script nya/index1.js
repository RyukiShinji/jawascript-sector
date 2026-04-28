function duplication(p) {
    p.a = 5; // change the property's value
    p.b = 'xyz'; // add a property
    alert("in function" + JSON.stringify(p));
    return JSON.stringify(p) + " ! " + JSON.stringify(p) + " !";
};

let x = {a:1};
alert("object: " + JSON.stringify(x));
const ret = duplication(x);


// is the modifications of the argumen done in the function visible here? yes
alert("Return value : " + ret + "object: " + JSON.stringify(x));

"use strict";

function duplication(p) {
     return p + "!"
}

// via "call"
let ret = duplication.call(window, "ini adalah invocation via call");
alert(ret);

// via "apply"
ret = duplication.apply(window, ["ini adalah invocation via apply"])
alert(ret);

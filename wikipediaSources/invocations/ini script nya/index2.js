"use strict";

// use the "new" constructor
let duplication = new Function("p",
    "return p + '!'");

const ret = duplication("menggunakan 'new' sebagai kontruksi");
alert(ret);

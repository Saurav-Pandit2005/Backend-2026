console.log("Saurav Pandit");
console.log("----------------");


let n = 25;
for(let i=1; i<n; i++){
    console.log(i*n);
}

// -------------------------------------------------------------------------
// process.argv Concept

console.log(process.argv);

let argv = process.argv;

for(let i=2; i<argv.length; i++){
    console.log("hello", argv[i]);
}

// ----------------------------------------------
// Exports in files Concepts 

const value = require("./math");
console.log(value);
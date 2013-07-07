var fs = require('fs');
var outfile = "hello.txt";
var out = "Hey my name is Minh of minh.io\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

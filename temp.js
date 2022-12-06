const fs = require('fs');

var text = fs.readFileSync("./allimages").toString('utf-8');
var textByLine = text.split("\n")


console.log("var filenames=[");

for (i=0;i<textByLine.length;i++)
{
    console.log( "\"" + textByLine[i] + "\",");
}

//console.log(textByLine.length)
console.log("];");
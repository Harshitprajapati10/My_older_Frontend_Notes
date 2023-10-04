// FILE IO

//module importing -->built-in modules, own created modules, third party modules
const fs = require("fs");

let text = fs.readFileSync("tut64.txt", "utf-8");
text = text.replace("browser", "rohan")

console.log("The content of the file is");
console.log(text);

console.log("Creating an new file")

fs.writeFileSync("tut64_write.txt",text);//create new file

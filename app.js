// const { myReadFile } = require("./filesys.js");

// // myReadFile('exaple.txt')

// const {myReadFile, customerDetails} = require("./first.js");
// myReadFile(`myfile.txt`);
// customerDetails(`me.txt`);


// const {database} = require("./lagzyl.js");
const { writeToFile, customerGoods, appendWrite } = require("./filesys.js");
const { asyncWrite, asyncAppendWrite } = require("./filesyssync.js");

writeToFile("datatext.txt", "my name gbenga, i live in united kingdomw")
// database(`datatext.txt`);
customerGoods(`exaple.txt`);
asyncWrite("me.txt", "this is an async await neater version");

asyncAppendWrite('myfile.txt', `I am interested in the Java Backend Engineer position at your organization. I have hands-on experience with Java, Spring Boot, and PostgreSQL, building scalable APIs, optimizing database performance, and working within agile teams to deliver reliable backend solutions.
I am confident my skills in developing secure, maintainable code and collaborating effectively with cross-functional teams make me a strong fit for this role. Please find my CV attached for your review. gottaha`)

appendWrite(`myfile.txt`, `everything is possible with you by my side`);
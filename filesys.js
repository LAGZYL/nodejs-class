//file system
const fs = require('fs')

//read a file
function myReadFile(filename){
fs.readFile(filename, 'utf8', (err, data) => {
    if(err){
        throw new Error("there is an error reading from file");
    }

    console.log("file content => :", data)
})
}

// wite to a file
function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, (err) =>{
        if (err) {
            console.log("error writing to file", err);
            return;
        }

        console.log("file written successfully")
    } )
}

function customerGoods(listTotal){
    fs.writeFile(listTotal, "you have 15 item in the cart, please insert your card to make.", (err) =>{
        if (err) {
            console.log("the card inserted is not valid", err);
            return;
        }
        console.log("payment succesfull")
    } )
}

//appendfile

function appendWrite(filename, content) {
    fs.appendFile(filename, content + "\n", (err) => {
        if(err){
            console.log( "error apprehended to file", err);
            return;
        }
    })
    console.log(`Content appended to ${filename} succesfully1`)
}



module.exports = { myReadFile, writeToFile, customerGoods, appendWrite };




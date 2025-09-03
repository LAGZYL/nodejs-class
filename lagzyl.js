const fs = require('fs');

function database(filename){
 fs.readFile(filename, `utf8`, (err, data) => {
    if(err){
        throw new Error("this is invalid")
    }
    console.log("file content => :",  data)
 })
}

module.exports = { database }
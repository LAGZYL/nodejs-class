const fs = require('fs').promises;

async function asyncWrite(filename, content) {
    try{
        await fs.writeFile(filename, content);
        console.log("file written successfully");
    } catch(error){
        console.log("error writing to file", error);
    }
}


// writing without overidden
async function asyncAppendWrite(filename, content) {
    try {
       await fs.appendFile(filename, content + "\n");
       console.log(`Content appended to '${filename}' successfully!`);
    } catch (error) {
        console.log("error appending to file", error);
    }
}

module.exports = { asyncWrite, asyncAppendWrite }
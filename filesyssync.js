const fs = require('fs').promises;

// async function asyncWrite(filename, content) {
//     try{
//         await fs.writeFile(filename, content);
//         console.log("file written successfully");
//     } catch(error){
//         console.log("error writing to file", error);
//     }
// }


// // writing without overidden
// async function asyncAppendWrite(filename, content) {
//     try {
//        await fs.appendFile(filename, content + "\n");
//        console.log(`Content appended to '${filename}' successfully!`);
//     } catch (error) {
//         console.log("error appending to file", error);
//     }
// }

// module.exports = { asyncWrite, asyncAppendWrite }

// const fs = require ("fs").promises
// async function asynclagzyl(filename, content){
// try{

//     await fs.writeFile(filename, content);
//     console.log(`file ${filename} has been written  successfully`)

    
// }catch(error){
//  console.log(`there is a error reading this file ${filename}`)
// }
// }

// module.exports = {asynclagzyl}

async function asyncrenameFile(oldFileName, newFileName) {
try {
    await fs.rename(oldFileName,newFileName);
    console.log(`file ${oldFileName}, has been rename succesfully`)
} catch(error) {
    console.log(`there is error => renaming this file`, error)
}
}

module.exports = {asyncrenameFile}









    
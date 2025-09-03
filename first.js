const fs = require(`fs`)

function myReadFile(filename) {
  fs.readFile(filename, `utf8`,(err,data)=>{
    if(err){
        throw new Error("there is an error in this file")
    }
    console.log(data)
  }
) 
}

function customerDetails(filename){
fs.readFile(filename, `utf8`, (err, data) =>{
  if(err){
    throw new Error("there is an error reading this file")
  }
  console.log(data)
})
}
module.exports={myReadFile, customerDetails}
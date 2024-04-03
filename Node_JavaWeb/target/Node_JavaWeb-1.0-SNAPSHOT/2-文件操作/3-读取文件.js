let fs = require("fs");
fs.readFile("./file/古诗1.txt",(err, data) => {
    if(err){
        console.log(err);
    }else {
        console.log(data.toString());
    }
})


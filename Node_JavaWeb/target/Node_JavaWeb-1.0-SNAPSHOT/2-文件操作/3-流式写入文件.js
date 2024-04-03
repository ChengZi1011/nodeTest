let fs = require("fs");
//减少打开关闭文件的次数，适合大文件或者频繁写入
let ws = fs.createWriteStream("./file/古诗.txt");
ws.write("千里莺啼绿映红,\r\n");
ws.write("水村山郭酒旗风,\r\n");
ws.write("南朝四百八十寺,\r\n");
ws.write("多少楼台烟雨中。\r\n");
ws.close()

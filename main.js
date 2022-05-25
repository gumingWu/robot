const request = require("request");
const path = require("path");
const fs = require("fs");
const id = (~~(Math.random() * 100000)).toString(); // 获取小于10w的数字
const url = `https://robohash.org/${id}`;
const dirPath = path.resolve(__dirname, "pic");
const now = new Date().toLocaleDateString().replaceAll("/", "-");
request(url).pipe(fs.createWriteStream(`${dirPath}/${now}.png`));

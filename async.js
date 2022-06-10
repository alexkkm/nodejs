import fs from "fs";

console.log("阻塞代码实例");
//阻塞代码实例
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");


console.log("非阻塞代码实例");
//非阻塞代码实例
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");
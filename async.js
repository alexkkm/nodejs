import { readFile, readFileSync } from "fs";

// 异步读取 do after the process running
readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取 do while the process running
var data = readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");
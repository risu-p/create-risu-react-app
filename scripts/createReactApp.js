#!/usr/bin/env node
const readline = require("readline");
const childProcess = require("child_process");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\x1B[36m%s\x1B[0m", "*****创建咕咚React仓库*****");

rl.question("仓库名：", (value) => {
  rl.close();
  console.log("\x1B[36m%s\x1B[0m\x1B[2m", `${value} 正在创建...`);
  childProcess.execSync(`cp -r ${path.resolve(
    __dirname,
    ".."
  )}/reactAppTemplate ./${value} &&
  cd ${value} &&
  git init`);
  console.log("\x1B[0m\x1B[32m%s\x1B[0m", `${value} 创建成功！`);
});

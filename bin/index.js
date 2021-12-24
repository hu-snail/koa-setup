#! /usr/bin/env node
import fs from "fs";
import createIndexTemplate from "./createIndexTemplate.js";
import createPackageTemplate from "./createPackageTemplate.js";
import question from "./question/index.js";
import { createConfig } from "./config.js";
import { execa } from "execa";
import path from "path";
import package from "../package.json";
// 获取当前路径
var currentPath = path.resolve("./");

const answer = await question();
const config = createConfig(answer);

// 1.创建文件夹
fs.mkdirSync(getRootPath());

// 2.创建入口文件
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config));

// 3.创建package.json
fs.writeFileSync(
  `${getRootPath()}/package.json`,

  createPackageTemplate(config)
);

// 4.安装依赖
execa("yarn", {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});
/** 获取根目录 */
function getRootPath() {
  return `${currentPath}/${config.packageName}`;
}

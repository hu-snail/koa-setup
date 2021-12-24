import fs from "fs";
export default () => {
  return {
    type: "input",
    name: "packageName",
    async validate(val) {
      if (val) {
        const isExists = await dirExists(val);
        if (!isExists) return `该目录已经存在"${val}",请重新命名`;
        else return true;
      } else return "Plase set packageName";
    },
    message: "set package name:",
  };
};

function getAccess(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, (err) => {
      if (err) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

async function dirExists(dir) {
  let isExists = await getAccess(dir);
  return isExists;
}

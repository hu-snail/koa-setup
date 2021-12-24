import ejs from "ejs";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

export default (config) => {
  const __dirname = fileURLToPath(import.meta.url);
  const indexTemplate = fs.readFileSync(
    path.resolve(__dirname, "../template/index.ejs")
  );
  const code = ejs.render(indexTemplate.toString(), {
    ...config.middleware,
  });
  return code;
};

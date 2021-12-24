import ejs from "ejs";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

export default (config) => {
  const __dirname = fileURLToPath(import.meta.url);

  const packageTemplate = fs.readFileSync(
    path.resolve(__dirname, "../template/package.ejs")
  );
  const code = ejs.render(packageTemplate.toString(), {
    ...config,
    ...config.middleware,
  });
  return code;
};

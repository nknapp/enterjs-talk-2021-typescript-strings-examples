const globby = require("globby");
const fs = require('fs');

(async () => {
  for await (const path of globby.stream("src/*/*.ts")) {
    trimComments(path)
  }
})();

function trimComments(path) {
    const fileContents = fs.readFileSync(path, 'utf-8')
    const uncommented = fileContents.replace(/\/\/-- ?/mg, "")
    const removed = uncommented.replace(/\/\/.*$/mg, "")
    fs.writeFileSync(path, removed)
}

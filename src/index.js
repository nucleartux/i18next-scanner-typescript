var fs = require("fs");
var path = require("path");
var typescript = require("typescript");

module.exports = function typescriptTransform(options) {
  options = options || {};
  if (!options.extensions) {
    options.extensions = ["tsx"];
  }

  return function transform(file, enc, done) {
    const extension = path.extname(file.path);
    const parser = this.parser;
    let content = fs.readFileSync(file.path, enc);

    if (options.extensions.indexOf(extension) !== -1) {
      content = typescript.transpileModule(content, {
        fileName: path.basename(file.path)
      }).outputText;

      parser.parseFuncFromString(content);
    }

    done();
  };
};

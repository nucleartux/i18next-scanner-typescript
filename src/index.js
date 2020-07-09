const fs = require("fs");
const path = require("path");
const typescript = require("typescript");

module.exports = function typescriptTransform(
  options = {
    tsOptions: {
      target: "es2018",
    },
  }
) {
  if (!options.extensions) {
    options.extensions = [".ts", ".tsx"];
  }

  return function transform(file, enc, done) {
    const { base, ext } = path.parse(file.path);

    if (options.extensions.includes(ext) && !base.includes(".d.ts")) {
      const content = fs.readFileSync(file.path, enc);

      const { outputText } = typescript.transpileModule(content, {
        compilerOptions: tsOptions,
        fileName: path.basename(file.path),
      });

      this.parser.parseTransFromString(outputText);
      this.parser.parseFuncFromString(outputText);
    }

    done();
  };
};

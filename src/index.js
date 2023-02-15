const fs = require("fs");
const path = require("path");
const typescript = require("typescript");

module.exports = function typescriptTransform(
  options = {
    tsOptions: {
      target: "es2018",
    },
    extensions: [".ts", ".tsx"],
  },
  transformFn,
) {
  return function transform(file, enc, done) {
    const { base, ext } = path.parse(file.path);

    if (options.extensions.includes(ext) && !base.includes(".d.ts")) {
      const content = fs.readFileSync(file.path, enc);

      const { outputText } = typescript.transpileModule(content, {
        compilerOptions: options.tsOptions,
        fileName: path.basename(file.path),
      });

      if (typeof transformFn === 'function') {
        transformFn.call(this, outputText, file, enc, done);
        return;
      }

      this.parser.parseTransFromString(outputText);
      this.parser.parseFuncFromString(outputText);
    }

    done();
  };
};

## i18next-scanner-typescript

Typescript support for [i18next-scanner](https://github.com/i18next/i18next-scanner/)

## Install

```bash
yarn add -D i18next-scanner-typescript
```

## Usage

```js
const typescriptTransform = require('i18next-scanner-typescript');

module.exports = {
  options: {
    func: {
      // don't pass ts or tsx here!
      extensions: ['.js', '.jsx'],
    },
    trans: {
      // don't pass ts or tsx here!
      extensions: ['.js', '.jsx'],
    },
  },
  // your i18next-scanner config
  // ...
  transform: typescriptTransform({
    // default value for extensions
    extensions: [".ts", ".tsx"],
    // optional ts configuration
    tsOptions: {
      target: "es2017",
    },
    // optional custom transform function
    function customTransform(outputText, file, enc, done) {
      // do something custom with the transpiled `outputText`
      parser.parseTransFromString(outputText);
      parser.parseFuncFromString(outputText);

      done();
    },
  }),
};
```

Double check that you don't have TS extensions in the non-transform configuration

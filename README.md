## i18next-scanner-typescript

Typescript support for [i18next-scanner](https://github.com/i18next/i18next-scanner/)


## Install

```
yarn add -D i18next-scanner-typescript
```


## Usage

```
var typescriptTransform = require('i18next-scanner-typescript');

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
      extensions: [".tsx"],
      // optional ts configuration
      tsOptions: {
        target: "es2017",
      },
  }),
};

```

Double check that you don't have TS extensions in the non-transform configuration

## i18next-scanner-typescript

Typescript support for [i18next-scanner](https://github.com/i18next/i18next-scanner/)

## Usage

```
var typescriptTransform = require('i18next-scanner-typescript');

module.exports = {
  // your i18next-scanner config
  // ...
  transform: typescriptTransform({ extensions: ["tsx"] })
};

```
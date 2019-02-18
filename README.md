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
  trans: {
    component: "Trans"
  },
  // your i18next-scanner config
  // ...
  transform: typescriptTransform({ extensions: [".tsx"] })
};

```
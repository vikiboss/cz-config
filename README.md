# cz-config

Viki's shareable [cz-customizable](https://github.com/leoforfree/cz-customizable) config.

## Usage

Install

```bash
npm i -D cz-config    # npm
pnpm add -D cz-config # pnpm
```

Configurate your `.cz-config.js`

```js
module.exports = require('cz-config');
```

If you don't want to use `.cz-config.js`, you can modify your `package.json` as follows:

```json
{
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    },
    "cz-customizable": {
      "config": "node_modules/cz-config"
    }
  }
}
```

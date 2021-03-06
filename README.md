# replace-key
> Replace the Key in an Object

# features
- simple
- universal support (AMD, CJS, IIFE, and ESM)
- works in Web Workers

# install
```bash
npm install replace-key
```

# usage
```javascript
const replaceKey = require("replace-key");

const obj = { a: 1 };
const old_key = 'a';
const new_key = 'b';

replaceKey(obj, old_key, new_key);
// obj is now { b: 1 }
```

## advanced usage
```js
// using "named params"
replaceKey({ obj, old_key, new_key });
// obj is now { b: 1 }
```

# Base Development Envrionment with React

After updating `tsconfig.json`, no longer need

```js script
import React from "react";
```

## Frontend Only

```sh
git clone --branch react-ts --single-branch --depth 1 git@github.com:justin0979/devconfig.git
```

#### Absolute Path

For use of absolute paths like:

```javascript
import newFile from "&newdirname/newFile";
```

update the following:

<ul>
  <li>Update <code>babel.config.js</code>:
  
 ```sh
 module.exports = {
plugins: [
           "module-resolver", {
              root: ["./"],
               alias: {
                 "&newdirname": "./src/newdirname"
               }
             }
         ]
 }
 ```
 
  </li>
  <li>
 Update <code>tsconfig.json</code>:
 
   ```sh
{
     "compilerOptions": {
      "paths": {
        "&newdirname/*": ["./src/newdirname/*"]
     }
    }
}
   ```
 
    To import <code>index.ts</code> like:

    ```javascript
    import * from "&newdirname";
    ```

    change <code>tsconfig.json</code>:

    ```sh

{
"compilerOptions": {
"baseUrl": "./",
"paths": {
"&newdirname": [
"src/newdirname/index.ts",
"src/newdirname/*"
]
}
}
}

```

   </li>
  </ul>
</ul>

The `tsconfig.json` comes from:
[TypeScript: Documentation Path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)
```

# Base Development Envrionment with React

## Frontend Only

```sh
git clone --branch react-ts --single-branch --depth 1 git@github.com:justin0979/devconfig.git
```

For use of absolute paths like (from [TypeScript: Documentation's Path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)):

```javascript
import newFile from "&newdirname";
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
 
   </li>
 </ul>
</ul>

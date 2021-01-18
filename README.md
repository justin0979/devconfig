# Base Development Envrionment with React

## Frontend Only

```sh
git clone --branch react-ts --single-branch --depth 1 git@github.com:justin0979/devconfig.git
```

For use of absolute paths like:

```javascript
import newFile from "&newdirname";
```

update the following:

<ul>
 <li>Update `babel.config.js`:
  
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
   Update `tsconfig.json`:
 
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

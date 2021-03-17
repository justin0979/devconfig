## "Base" Development Envrionments

<sub>(Some of the comments towards the bottom might be out of date, haven't had a chance to check test them since updating to webpack v5)</sub>

Light weight development environment. This is just for a quick install & run and is easily configurable with webpack and babel. Webpack is <strong>not</strong> set up for production in some branches.

<details>

<summary><strong>Overview</strong></summary>

run `npm i` then `npm start` and go to `localhost:3000`.<br />
Uses `webpack-dev-server` for auto reloads on save.<br/>
Aboslute paths are set to `src` in `webpack.config.js` for `main`, the other branches use `babel.config.js` to set absolute routes.

Sass is already setup.

`Branch: main` is only html, js, and scss.

All of the following copy and paste commands for cloning use `SSH`.

To change directory name while cloning, add new name after repo:

```sh
git clone git@github.com:justin0979/devconfig.git new_name
```

To change favicon, add new favicon to public and change path to that favicon in webpack configs' html plugin.

<hr />
</details>

<details>
<summary><b>Testing</b></summary>

Setup `jest` to not throw errors for importing .svg files, use mock files.

In the root directory, run:

```sh
mkdir __mocks__
```

Add mock files:

```sh
touch __mocks__/fileMock.js __mocks__/styleMock.js
```

Add to `fileMock.js`:

```javascript
module.exports = "test-file-stub";
```

Add to `styleMock.js`:

```javascript
module.exports = {};
```

Now create `jest.config.js` in root directory:

```sh
touch jest.config.js
```

Add/Update `jest.config.js`:

```javascript
module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)*(spec|test).*(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
```

</details>

<details>
<summary><b>React</b></summary>

For only the `react` branch,<br />
copy and paste:

```sh
git clone --branch react --single-branch --depth 1 https://github.com/justin0979/devconfig.git
```

run the following to clone and enter directory:

```sh
git clone --branch react --single-branch --depth 1 https://github.com/justin0979/devconfig.git \
  && cd devconfig \
  && npm i
```

to change directory name on install:

```ssh
git clone --branch react --single-branch --depth 1 https://github.com/justin0979/devconfig.git <new_name>
```

Alternatively, do the following for all branches:<br />
run the following to clone and enter directory:<br />

```sh
git clone --branch react https://github.com/justin0979/devconfig.git \
  && cd devconfig \
  && npm i
```

To access other branches, run `git checkout <branch name>`.<br />
e.g. `git checkout master`<br />
\*there is also a typescript with react in `Branch: react-ts`.

##### The following two commands use ssh instead of https.<br />

For cloning, entering directory and installing, run:<br />

```sh
git clone --branch react --single-branch --depth 1 git@github.com:justin0979/devconfig.git \
  && cd devconfig \
  && npm i
```

The same as above, but having all branches:<br />

```sh
git clone --branch react git@github.com:justin0979/devconfig.git \
  && cd devconfig \
  && npm i
```

##### The same as above but with starting VSC and running app.<br />

Only react branch:

```sh
git clone --branch react --single-branch --depth 1 git@github.com:justin0979/devconfig.git
```

Only react branch and entering and installing packages in devconfig dir:

```sh
git clone --branch react --single-branch --depth 1 git@github.com:justin0979/devconfig.git \
  && cd devconfig \
  && npm i \
  && npm start
```

All branches:

```sh
git clone --branch react git@github.com:justin0979/devconfig.git \
  && cd devconfig \
  && npm i \
  && npm start
```

<hr />
</details>

<details>
<summary><b>React With Typescript</b></summary>

Only react-ts branch:<br />

```sh
git clone --branch react-ts --single-branch --depth 1 git@github.com:justin0979/devconfig.git
```

Install only react-ts branch and enter the directory, install dependencies and start program:

```sh
git clone --branch react-ts --single-branch --depth 1 git@github.com:justin0979/devconfig.git \
  && cd devconfig \
  && npm i \
  && npm start
```

To install and change the dircetory name:

```ssh
git clone --branch react-ts --single-branch --depth 1 git@github.com:justin0979/devconfig.git <new_name>
```

All branches:

```sh
git clone --branch react-ts git@github.com:justin0979/devconfig.git \
  && cd devconfig \
  && npm i \
  && npm start
```

### Tests use only `jest`.

<details>
  <summary>Updating React w/ TypeScript Absolute Paths</summary>
  
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
   <ul>
    <li>
 If importing <code>index.ts</code> with:
      
      import { whatever } from "&newdirname";
      
      
 I had to add:
 
   ```sh
{
     "compilerOptions": {
      "paths": {
        "&newdirname": ["./src/newdirname"],  // <--- Add without '/*' at end of path
        "&newdirname/*": ["./src/newdirname/*"]
     }
    }
}
   ```
   </li>
   </ul>
   </li>
</ul>

The `tsconfig.json` comes from:
[TypeScript: Documentation Path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)

</details>

<hr />
</details>

<details>
<summary><b>Typescript only, no react</b></summary>

For only `typescript` already installed and ready for use:<br />
run the following to clone and enter directory:<br />

```sh
git clone --branch typescript --single-branch --depth 1 https://github.com/justin0979/devconfig.git \
  && cd devconfig
  && npm i
```

For all branches, follow steps from React section above.<br />
\*adjust the `tsconfig.json` file.

<hr />
</details>

<details>
<summary><strong>Kubernetes</strong></summary>

When using Kubernetes and needing to adjust where the project is running at, make the following change: <br />
From

```javascript
module.exports = {
  // ...
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    hot: true,
    historyApiFallback: {
      index: "index.html"
    },
    overlay: true,
  },
  ...
}
```

to

```javascript
module.exports = {
  // ...
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    hot: true,
    historyApiFallback: {
      index: "index.html"
   },
    overlay: true,
    public: "posts.com" // or whatever name will be (e.g., public: "ticketing.dev")
  },
  ...
```

<hr />
</details>

<details>

<summary><strong>Issues</strong></summary>

##### [SOLVED Issue] Unable to load wasm file to dist/

Using `esbuild-wasm@0.8.27`, adding
`./node_modules/esbuild-wasm/esbuild.wasm` to `./public`
did not build with `esbuild.wasm` being added to `./dist`.<br />

##### SOLUTION for Unable to load wasm file to dist/

run

```ssh
npm i -D copy-webpack-plugin
```

In `webpack.common.config` add:

```javascript
const CopyWebpackPlugin = require("copy-webpack-plugin");

 module.exports = {
   ...,
   plugins: [
     new CopyWebpackPlugin({
      patterns: [
        {
          from: "public"
        }
      ]
     })
   ]
 };
```

<details>

<summary>[SOLVED for TS Issue] Unable to load `svg` files onto html img's</summary>

e.g.

```html
<img src="loader.svg" alt="stuff" />
```

~~I just opened the svg file and copied and pasted the `<svg>...</svg>` directly into the html file.~~<br />
`.svg` file added to `img` element with JS file by importing the `svg` file and `setAttribute("src", <svg filename>)`.

```javascript
import loader from "images/loader.svg";

const loaderDiv = document.getElementById("loader");
const imgSvg = document.createElement("img");
imgSvg.setAttribute("src", loader);
imgSvg.setAttribute("alt", "Loading");
loaderDiv.appendChild(imgSvg);
```

(May have overlooked a simple, direct, common sense way for adding directly to `index.html` though)

</details>

<details>

<summary>SOLUTION for Unable to load `svg` files onto html img's</summary>

Fixed above issue by adding `custom.d.ts` to root directory:

```javascript
// custom.d.ts

declare module "*.svg" {
  const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const content: string;
  export default content;
}
```

</details>

</details>

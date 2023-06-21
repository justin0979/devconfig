## "Base" Front End Development Envrionments

<sub>(Some of the comments might be out of date and I've probably repeated myself many times
throughout each README)</sub>

Manually setup webpack for a light weight <em><strong>development</strong></em>
environment. This is just for a quick install & run and is easily configurable
with webpack and babel. <strong>Webpack configuration is not set up for
production</strong>.

Just click on the below dropdowns and copy and paste the `git clone` command.

<details>

<summary><strong>Get Started</strong></summary>

<sub>(Third party package updates may show errors. I will try to update this repo as often as I can.)</sub>

First, clone the branch you want:

<strong>
Be sure to check the repository name for whether or not `SSH` or `https` is used in 
the copy and paste commands.
</strong>
<br />

To get all of the branches, using `SSH`:
(To change directory name while cloning, add new name after repo):

<sub>(replace `new_name` at end of command with the desired name of directory,
leave off `new_name` to use the default name of `devconfig`)</sub>

```sh
git clone git@github.com:justin0979/devconfig.git new_name
```

For only the main branch:

```sh
git clone --branch main --single-branch --depth 1 https://github.com/justin0979/devconfig.git
```

Next, run `npm i` then `npm start` and go to `localhost:3000`.<br />

-   `webpack-dev-server` is used for auto reloads on save.
-   Aboslute paths are set to `src` in `webpack.config.js` for
    `main`, the other branches use `babel.config.js` to set
    absolute routes.
-   Sass is already setup.
-   `Branch: main` is only html, js, and scss.

<strong>Reminder for setting up new repo in github, run the following:</strong><br />

```sh
rm -rf .git
```

<br />

To change favicon, add new favicon to `public` directory and change path to that favicon
in both `config/webpack.dev.js` and `config/webpack.prog.js` to:

```javascript
plugins: [new HtmlWebpackPlugin({favicon: <new_favicon>})]
```

</details>

<hr />

#### Select A Setup From Below

Then just copy and paste the `git clone` for that single
branch.

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

### Two ways:

### First way:

install [tsconfig-paths-webpack-plugin](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin)

update `config/webpack.common.js`:

```javascript
import TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "tsconfig.json"
      })
    ]
  }
}
```

then add the desired absolute paths to `tsconfig.json`:

```json
{
    "compilerOptions": {
        "paths": {
            "&components/*": ["src/components/*"]
        }
    }
}
```

### Second Way:

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
git clone --branch typescript --single-branch --depth 1 https://github.com/justin0979/devconfig.git
```

For all branches, follow steps from React section above.<br />
\*adjust the `tsconfig.json` file.

<hr />
</details>

For those using `React`, after development, `src/` can be copied directly
to `create-react-app` and `npm install` all required packages
(e.g. `npm i -D sass`). Run `npm build` or other processes as needed.
Be sure to check for <strong>absolute</strong> and
<strong>relative paths</strong> in each branch. See
[Create React App Absolute Imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
to set up custom absolute paths. <sub>In root dir, run `touch jsconfig.json`
and copy and paste code from link into that file</sub>

Also, browser refreshes on saves are controlled with `react-refresh-webpack-plugin` and `react-refresh-typescript`.
I haven't looked into these as thoroughly to see if there is a rule to clear the browser console on saves.

<hr />

<details>
<summary><b>Absolute Paths</b></summary>

If copying `src/` directly to `create-react-app`, be sure to either check each import
path **or** be sure to add `jsconfig.json` file to `create-react-app`. In `jsonconfig.json`:

```javascript
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

If above does not work, try `"include": ["./src"]` instead of `"include": ["src"]`.

</details>

<details>
<summary><b>Linting (Stylelint errors/warnings)</b></summary>

Done through `webpack`. To disable, comment out or delete
the appropriate plugins in `config/webpack.common.js`.

For `.scss` files: [stylelint](https://stylelint.io/) <br />
For SCSS linting in all branches, the only setup is from the
[Getting started](https://stylelint.io/user-guide/get-started)
section from the docs.

This `.stylelintrc.js` is more basic at this point. I adjust it as erros/warnings
appear that I do not need to deal with.<br />
To handle things like below:

```sh
ERROR in [stylelint]
src/sass/base/_base.scss
 18:5  x  Expected a space after //  scss/double-slash-comment-whitespace-inside

 1 problem (1 error, 0 warnings)
```

Just add the stated rule to `.stylelintrc.js` rules:

```javascript
module.exports = {
    extends: "...",
    rules: {
      "at-rule-empty-line-before": null,
      ...,
      "scss/double-slash-comment-whitespace-inside": null,
    }
}
```

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

<details>

<summary>[SOLVED Issue] Unable to load wasm file to dist directory</summary>

Using `esbuild-wasm@0.8.27` in React program to transpile and bundle in browser, adding
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

</details>

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

#### SOLUTION for Unable to load `svg` files onto html img's

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

<details>
  <summary>Routing Issue</summary>

Check `output.publicPath` in `config/webpack.dev.js` and/or
`config/webpack.prod.js` and adjust according to your situation.

</details>

<details>
<summary>Install & Setup Tailwind CSS</summary>

Official documentation: [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation)

In terminal:

```sh
npm i -D tailwindcss
npx tailwindcss init
```

In `config/postcss.config.js`:

```javascript
const tailwindcss = require("tailwindcss");

module.exports = {
    plugins: [require("autoprefixer"), tailwindcss],
};
```

In `tailwind.config.js`:

```javascript
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

in `input.css`, or `main.css` (whatever `.css` filename you choose, _e.g._, `grover.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In `index.tsx`:

```javascript
import ReactDOM from "react-dom/client";
import "./input.css"; // or whatever you named the file
import App from "./App";
```

</details>

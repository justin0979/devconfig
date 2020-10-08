```javascript I'm A tab
console.log('Code Tab A');
```
```javascript I'm tab B
console.log('Code Tab B');
```

Download, change dir, install and run Only react branch (for quick copy/paste):<br />
```sh
git clone --branch react --single-branch --depth 1 git@github.com:justin0979/devconfig.git \
  && cd devconfig \
  && code . \
  && npm i \
  && npm start
```
## Base Development Envrionments

Light weight dev environment. This is just for a quick install & run and is easily configurable with webpack and babel.

run `npm i` then `npm start` and go to `localhost:3000`.<br />
Uses `webpack-dev-server` for auto reloads on save.<br/>
Aboslute paths are set to `src` in `webpack.config.js`.

Sass is already setup.

`Branch: main` is only html, js, and scss.

### React

For only the `react` branch,<br />
run the following to clone and enter directory:
```sh
git clone --branch react --single-branch --depth 1 https://github.com/justin0979/devconfig.git \
  && cd devconfig \
  && npm i
 ```

Alternatively, do the following for all branches:<br />
run the following to clone and enter directory:<br />
```sh
git clone --branch react https://github.com/justin0979/devconfig.git \
  && cd devconfig
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
git clone --branch react --single-branch --depth 1 git@github.com:justin0979/devconfig.git \
  && cd devconfig \
  && code . \
  && npm i \
  && npm start
```
All branches:
```sh
git clone --branch react git@github.com:justin0979/devconfig.git \
  && cd devconfig \
  && code . \
  && npm i \
  && npm start
```
#### For react-ts branch (has Typescript)<br />

Only react-ts branch:<br />
```sh
git clone --branch react-ts --single-branch --depth 1 git@github.com:justin0979/devconfig.git \
  && cd devconfig \
  && code . \
  && npm i \
  && npm start
```
All branches:
```sh
git clone --branch react-ts git@github.com:justin0979/devconfig.git \
  && cd devconfig && code . \
  && npm i \
  && npm start
```

### Typescript only, no react

For only `typescript` already installed and ready for use:<br />
run the following to clone and enter directory:<br />
```sh
git clone --branch typescript --single-branch --depth 1 https://github.com/justin0979/devconfig.git \
  && cd devconfig
  && npm i
```
For all branches, follow steps from React section above.<br />
\*adjust the `tsconfig.json` file.

### Kubernetes

When using Kubernetes and needing to adjust where the project is running at, make the following change:
```javascript
module.exports = {
  // ...
  devServer: {
    contentBase: "dist",
    host: "0.0.0.0",
    port: 3000,
    hot: true,
    historyApiFallback: true,
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
    contentBase: "dist",
    host: "0.0.0.0",
    port: 3000,
    hot: true,
    historyApiFallback: true,
    overlay: true,
    public: "posts.com" // or whatever name will be.
  },
  ...
```

## Issues

Unable to load `svg` files onto html img's, e.g.
```html
<img src="loader.svg" alt="stuff" />
```
~~I just opened the svg file and copied and pasted the `<svg>...</svg>` directly into the html file.~~<br />
`.svg` file added to `img` element with JS file by importing the `svg` file and `setAttribute("src", <svg filename>)`.
```javascript
import loader from 'images/loader.svg';

const loaderDiv = document.getElementById('loader');
const imgSvg = document.createElement('img');
imgSvg.setAttribute('src', loader);
imgSvg.setAttribute('alt', 'Loading');
loaderDiv.appendChild(imgSvg);
```
(May have overlooked a simple, direct, common sense way for adding directly to `index.html` though)

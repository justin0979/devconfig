Download, change dir, install and run Only react branch (for quick copy/paste):<br />
`git clone --branch react --single-branch --depth 1 git@github.com:justin0979/devconfig.git && cd devconfig && code . && npm i && npm start`
<br />
Download react branch only:<br />
`git clone --branch react --single-branch --depth 1 git@github.com:justin0979/devconfig.git`


## Base Development Envrionments

Light weight dev environment. This is just for a quick install & run and is easily configurable with webpack and babel.

run `npm i` then `npm start` and go to `localhost:3000`.<br />
Uses `webpack-dev-server` for auto reloads on save.<br/>
Aboslute paths are set to `src` in `webpack.config.js`.

Sass is already setup.

`Branch: master` is only html, js, and scss.

### React

For only the `react` branch,<br />
run the following to clone and enter directory:<br />
`git clone --branch react --single-branch --depth 1 https://github.com/justin0979/devconfig.git && cd devconfig`
<br />
then run `npm i`.

Alternatively, do the following for all branches:<br />
run the following to clone and enter directory:<br />
`git clone --branch react https://github.com/justin0979/devconfig.git && cd devconfig`
<br />
then run `npm i`.
To access other branches, run `git checkout <branch name>`.<br />
e.g. `git checkout master`<br />
\*there is also a typescript with react in `Branch: react-ts`.

##### The following two commands use ssh instead of https.<br />

For cloning, entering directory and installing, run:<br />
`git clone --branch react --single-branch --depth 1 git@github.com:justin0979/devconfig.git && cd devconfig && npm i`
<br />

The same as above, but having all branches:<br />
`git clone --branch react git@github.com:justin0979/devconfig.git && cd devconfig && npm i`
<br />

##### The same as above but with starting VSC and running app.<br />

Only react branch:<br />
`git clone --branch react --single-branch --depth 1 git@github.com:justin0979/devconfig.git && cd devconfig && code . && npm i && npm start`
<br />

All branches:<br />
`git clone --branch react git@github.com:justin0979/devconfig.git && cd devconfig && code . && npm i && npm start`
<br />

#### For react-ts branch (has Typescript)<br />

Only react-ts branch:<br />
`git clone --branch react-ts --single-branch --depth 1 git@github.com:justin0979/devconfig.git && cd devconfig && code . && npm i && npm start`
<br />

All branches:<br />
`git clone --branch react-ts git@github.com:justin0979/devconfig.git && cd devconfig && code . && npm i && npm start`
<br />

### Typescript only, no react

For only `typescript` already installed and ready for use:<br />
run the following to clone and enter directory:<br />
`git clone --branch typescript --single-branch --depth 1 https://github.com/justin0979/devconfig.git && cd devconfig`
<br /> followed by `npm i`.<br />
For all branches, follow steps from React section above.<br />
\*adjust the `tsconfig.json` file.

### Kubernetes

When using Kubernetes and needing to adjust where the project is running at, make the following change:
<pre><code>module.exports = {
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
}</code></pre>
to
<pre><code>module.exports = {
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
}</code></pre>

## Issues

Unable to load `svg` files onto html img's (e.g. `<img src="loader.svg" alt="stuff" />`).<br />
~~I just opened the svg file and copied and pasted the `<svg>...</svg>` directly into the html file.~~<br />
`svg` file added to `img` element with JS file by importing the `svg` file and `setAttribute("src", <svg filename>)`.
(May have overlooked a simple, direct, common sense way though)

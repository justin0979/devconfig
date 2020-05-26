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

### Typescript

For only `typescript` already installed and ready for use:<br />
run the following to clone and enter directory:<br />
`git clone --branch typescript --single-branch --depth 1 https://github.com/justin0979/devconfig.git && cd devconfig`
<br /> followed by `npm i`.<br />
For all branches, follow steps from React section above.<br />
\*adjust the `tsconfig.json` file.

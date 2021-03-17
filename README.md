# Base Development Envrionment with React

## Frontend Only

Light weight dev environment. `create-react-app` covers way more scenarios; however, it takes time to install all of the dependencies. This is just for a quick install and run and is easily configurable with webpack and babel.

`npm i`<br />
`npm start`<br />
Go to `localhost:3000`

add packages with `npm i <packages>` or remove them with `npm uninstall <packages>`.<br/>
(e.g. `react-router-dom` is installed, remove it with `npm uninstall react-router-dom` and the environment is one package lighter)

After updating `babel.config.js` to use [JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html),
no longer need

```js script
import React from "react";
```

with functional components, but classes will still say it needs to import react.

### Using Docker

If use `docker-compose up` and later need to add package, you will have to use `docker-compose run client npm i <package>`; otherwise, you will get permission errors.

## Tests

Testing is configured with only jest.<br />
If needing to use:

```javascript
jest.spyOn(global, "fetch").mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(stuff),
  }),
);
```

implement this way instead:

```javascript
global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(stuff),
  }),
);
```

then, remove the mock to ensure tests are completely isolated:

```javascript
global.fetch.mockRestore();
delete global.fetch();
```

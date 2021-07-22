## Base Development Envrionments

(No production webpack configuration file setup yet)

run `npm i` then `npm start` and go to `localhost:3000`.

Uses `webpack-dev-server` for auto reloads on save.

Aboslute paths are set to `src` in `webpack.config.js`.

Sass is already setup.

For `react` already installed and ready for use:<br />
run `git checkout react` then `npm i` then `npm start`.

## Import /public/index.html

Import with:

```typescript
import "public_html";
```

To change this, go to `config/` and make changes to:

```javascript
module.export = {
  ...,
  resolve: {
    alias: {
      public_html$: path.resolve(__dirname, "../public/index.html")
    }
  },
  ...
}
```

## Import SVG file

In order to import `svg` files, you need to do the following:

1. Create custon.d.ts file in home directory<br />
   `touch custom.d.ts`
2. Add the following to `custom.d.ts`:

```
declare module "*.svg" {
  const content: string;
  export default content;
}
```

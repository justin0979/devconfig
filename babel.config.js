module.exports = {
  presets: [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    [
      "@babel/react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    "@babel/transform-runtime",
    "@babel/proposal-class-properties",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          // not needed since webpack uses source
          // here only if webpack aliasing isn't wanted
          "&components": "./src/components",
          "&images": "./src/images",
          "&sass": "./src/sass",
        },
      },
    ],
  ],
};

module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: { node: "current" },
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
    "@babel/typescript",
  ],
  plugins: [
    "@babel/transform-runtime",
    "@babel/proposal-class-properties",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "&components": "./src/components",
          "&images": "./src/images",
          "&sass": "./src/sass",
        },
      },
    ],
  ],
};

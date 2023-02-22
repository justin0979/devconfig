module.exports = {
  extends: "stylelint-config-standard-scss",
  rules: {
    "at-rule-empty-line-before": null,
    "at-rule-no-unknown": null,
    "block-no-empty": null,
    "color-hex-length": null,
    "declaration-colon-newline-after": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "declaration-empty-line-before": [
      "never",
      {
        ignore: ["after-declaration"],
      },
    ],
    indentation: [
      2,
      {
        ignore: ["inside-parens"],
      },
    ],
    "font-family-name-quotes": null,
    "font-family-no-missing-generic-family-keyword": null,
    "import-notation": null,
    "no-invalid-double-slash-comments": null,
    "scss/dollar-variable-empty-line-before": null,
    "scss/double-slash-comment-whitespace-inside": null,
  },
};

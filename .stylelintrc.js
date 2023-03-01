module.exports = {
  extends: "stylelint-config-standard-scss",
  rules: {
    "at-rule-empty-line-before": null,
    "at-rule-no-unknown": null,
    "color-hex-length": null,
    "comment-empty-line-before": null,
    "declaration-colon-newline-after": null,
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
    "scss/at-mixin-argumentless-call-parentheses": null,
    "scss/dollar-variable-empty-line-before": null,
    "scss/double-slash-comment-empty-line-before": null,
    "scss/double-slash-comment-whitespace-inside": null,
    "scss/no-global-function-names": null,
  },
};

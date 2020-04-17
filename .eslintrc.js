module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "error",
    "prettier/prettier": [
      "warn",
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        bracketSpacing: false,
        jsxBracketSameLine: true,
        arrowParens: "avoid",
        trailingComma: "none",
      },
    ],
  },
};

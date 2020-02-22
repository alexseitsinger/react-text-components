const path = require("path")

module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: path.resolve("./webpack.config.dev.js"),
      },
      jest: {
        jestConfigFile: path.resolve("./jest.config.js"),
      },
    },
  },
  plugins: [
    "node",
    "import",
    "simple-import-sort",
    "react",
    "jest",
    "jest-formatting",
  ],
  extends: [
    "@alexseitsinger/eslint-config/eslint",
    "@alexseitsinger/eslint-config/node",
    "@alexseitsinger/eslint-config/import",
    "@alexseitsinger/eslint-config/simple-import-sort",
    "@alexseitsinger/eslint-config/react",
    "@alexseitsinger/eslint-config/jest",
    "@alexseitsinger/eslint-config/jest-formatting",
    "prettier",
    "prettier/babel",
    "prettier/react",
  ],
}

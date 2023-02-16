/* eslint-env node */

module.exports = {
  plugins: ["simple-import-sort"],
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "no-console": "warn",
    curly: "error",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: ["block-like", "function", "multiline-expression", "return"],
      },
    ],
    "consistent-return": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": "warn",
    "vue/no-v-html": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: [
        "src/graphql/*/generated/*.ts",
        "src/graphql/generated/*.ts",
        "src/graphql/page/editables/generated/*.ts",
      ],
      rules: {
        "simple-import-sort/imports": "off",
        "simple-import-sort/exports": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
    {
      files: ["*.graphql", "*.gql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "prettier/prettier": "error",
      },
    },
  ],
};

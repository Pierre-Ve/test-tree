import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import babelParser from "@babel/eslint-parser";

export default [
  {
    files: ["src/**/*.js"],
    rules: {
      "prefer-const": "error",
      "no-unused-vars": "error",
      "prettier/prettier": "warn",
    },
    languageOptions: {
      ecmaVersion: 14,
      sourceType: "module",
    },
  },
  eslintPluginPrettierRecommended,
];

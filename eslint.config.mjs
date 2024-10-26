import pluginJs from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import typescriptParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    plugins: {
      react: pluginReact,
      "react-hooks": hooksPlugin,
      "@next/next": nextPlugin,
      prettier: eslintPluginPrettier,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    ignores: [".next/", "node_modules", "coverage", "build"],
  },
];

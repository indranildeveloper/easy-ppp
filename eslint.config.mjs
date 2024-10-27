import pluginJs from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import typescriptParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import importAliasPlugin from "eslint-plugin-import-alias";

export default [
  {
    files: ["**/*.{ts,tsx}"],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: typescriptParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
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
      "import-alias": importAliasPlugin,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  ...tseslint.configs.recommendedTypeChecked,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  importPlugin.flatConfigs.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["./tsconfig.json"],
        },
      },
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "import-alias/import-alias": [
        "error",
        {
          relativeDepth: 0,
          alias: [{ alias: "@/", matcher: "^src" }],
        },
      ],

      "import/order": [
        "error",
        {
          groups: [["builtin", "external", "internal"]],
          "newlines-between": "always",
        },
      ],
    },
  },
  {
    ignores: [
      ".next/",
      "coverage",
      "build",
      "node_modules",
      "eslint.config.mjs",
      "postcss.config.mjs",
      "tailwind.config.ts",
    ],
  },
];

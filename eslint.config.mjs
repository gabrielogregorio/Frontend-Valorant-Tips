import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;





// module.exports = {
//   "env": {
//     "jest": true
//   },
//   "extends": [
//     "next/core-web-vitals",
//     "plugin:cypress/recommended",
//     "airbnb",
//     "plugin:markdown/recommended",
//     "plugin:jsx-a11y/recommended",
//     "plugin:sonarjs/recommended",
//     "plugin:jest-formatting/recommended",
//     "plugin:promise/recommended",
//     "prettier",
//     "plugin:storybook/recommended"
//   ],

//   "globals": {
//     "cy": true
//   },
//   "overrides": [

//     {
//       "files": ["./cypress/**"],
//       "rules": {
//         "sonarjs/no-duplicate-string": "off"
//       }
//     },
//     {
//       "files": [".eslintrc.js"],
//       "rules": {
//         "@typescript-eslint/no-magic-numbers": "off"
//       }
//     },
//     {
//       "files": ["test/**", "**/**/*.spec.tsx", "**/**/*.test.tsx"],
//       "extends": ["plugin:jest/recommended", "plugin:testing-library/react"],
//       "plugins": ["jest"],
//       "rules": { "jest/prefer-expect-assertions": "off", "@typescript-eslint/no-magic-numbers": "off" }
//     }
//   ],
//   "parser": "@typescript-eslint/parser",
//   "plugins": [
//     "@typescript-eslint",
//     "import",
//     "deprecate",
//     "no-loops",
//     "jest-formatting",
//     "promise",
//     "jest",
//     "jsx-a11y",
//     "testing-library",
//     "sonarjs",
//     "cypress"
//   ],

//   "root": true,

//   "rules": {
//     "curly": ["error", "all"],
//     "@typescript-eslint/no-dynamic-delete": "error",
//     "@typescript-eslint/no-explicit-any": "error",
//     "@typescript-eslint/no-invalid-this": "error",
//     "@typescript-eslint/no-magic-numbers": ["error", { ignore: [1, 0] }],
//     "@typescript-eslint/no-redeclare": "error",
//     "@typescript-eslint/no-extra-non-null-assertion": "error",
//     "@typescript-eslint/no-shadow": ["error"],
//     "@typescript-eslint/no-confusing-non-null-assertion": "error",
//     'react/require-default-props': [2, { functions: 'defaultArguments' }],
//     "@typescript-eslint/no-empty-interface": "error",
//     "@typescript-eslint/no-unused-vars": ["error"],
//     "id-length": [2, { "min": 3, "properties": "never" }],
//     "import/extensions": "off",
//     "import/no-extraneous-dependencies": [
//       "error",
//       {
//         "devDependencies": true
//       }
//     ],
//     "import/no-unused-modules": [1, { "ignoreExports": ["./src/pages", "./src/stories"], "unusedExports": true }],
//     "import/prefer-default-export": "off",
//     "indent": ["error", 2],

//     "no-loops/no-loops": 2,
//     "no-shadow": "off",

//     "react/function-component-definition": [
//       2,
//       {
//         "namedComponents": "arrow-function",
//         "unnamedComponents": "arrow-function"
//       }
//     ],
//     "react/jsx-filename-extension": [0],
//     "react/jsx-props-no-spreading": "off",
//     "react/react-in-jsx-scope": "off"
//   },
// }

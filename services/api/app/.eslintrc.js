module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'import',
    '@typescript-eslint/eslint-plugin',
  ],
  extends: [
    'typescript',
    'airbnb-base',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "max-classes-per-file": "off",
    "import/prefer-default-export": "off",
    "no-useless-constructor": "off",
    "dot-notation": "off",
    "camelcase": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "indent": ["error", 2, {
      "SwitchCase": 1,
    }],
    "semi" : "off" ,
    "@typescript-eslint/semi" : [ "error" ],
    "import/no-extraneous-dependencies": "warn",
    "class-methods-use-this": "warn",
    "object-curly-newline": "warn",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "ignoreRestSiblings": true }],

    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/cognitive-complexity': 'warn',
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    }
  }
};
module.exports = {
    root: true,
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "no-console": 0,
        "import/no-cycle": "off",
        "linebreak-style": 0,
        "no-bitwise": "off",
        "no-debugger": "off",
        "no-param-reassign": [
            "error",
            {
                props: true,
                ignorePropertyModificationsFor: [
                    "store",
                    "store",
                    ],
            },
            ],
    },
};
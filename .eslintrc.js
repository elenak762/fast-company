module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard-with-typescript"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "space-before-function-paren": ["error", "never"],
        indent: ["error", 4], // Отступ количество пробелов
        semi: [2, "always"], // Точка с запятой в конце строки
        // Использование двойных кавычек
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "react/prop-types": 0
        
    }
};

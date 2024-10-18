[
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020, // Allows modern ECMAScript features
        sourceType: "module", // Allows using import/export
        ecmaFeatures: {
          jsx: true, // Enable linting for JSX files
        },
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      // ESLint recommended rules
      "no-unused-vars": "warn",
      "no-console": "warn",

      // React specific rules
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off", // For Next.js or React 17+ projects

      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off", // Change to 'warn' if you want to avoid using 'any'
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    ignores: ["node_modules", "dist"], // Ignore these directories
  },
];

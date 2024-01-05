module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ["*.js", "*.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["jsx-a11y"],
  rules: {
    "no-console": "error",
  },
};

/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["lcov", "text"],
      all: true,
      include: ["**/src/**/*.{ts,tsx}"],
      exclude: [
        "**/*.test.{ts,tsx}",
        "**/app/page.tsx",
        "**/types.ts",
        "**/*.d.ts",
        "**/src/setupTests.ts",
      ],
    },
  },
});

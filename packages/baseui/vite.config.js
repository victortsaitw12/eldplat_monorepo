import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, relative, extname } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react(), libInjectCss(), dts({
    insertTypesEntry: true,
  }),],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}")
          .map((file) => [
            relative("lib", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});

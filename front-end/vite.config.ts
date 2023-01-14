import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths'
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: "window",
  },
  root: 'web',
  optimizeDeps: {
    include: ["@react-navigation/native"],
    esbuildOptions: {
      mainFields: ["module", "main"],
      resolveExtensions: [".web.js", ".js", ".ts"],
      plugins: [esbuildCommonjs(["@react-navigation/elements"])],
    },
  },
  resolve: {
    extensions: [".web.tsx", ".web.jsx", ".web.js", ".tsx", ".ts", ".js"],
    alias: {
      "react-native": "react-native-web",
    },
  },
  plugins: [viteCommonjs(), react(), tsconfigPaths()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});


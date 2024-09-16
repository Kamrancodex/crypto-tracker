// vite.config.js
import { defineConfig } from "vite";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis", // Polyfill global object
      },
      plugins: [
        NodeGlobalsPolyfillPlugin(), // No need to specify buffer here anymore
      ],
    },
  },
});

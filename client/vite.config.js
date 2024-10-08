import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/backend": {
        target: "http://localhost:4000",
        rewrite: (path) => path.replace(/^\/backend/, ""),
        secure: false,
      },
    },
  },
});

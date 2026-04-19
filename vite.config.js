import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Match LightWrk: LAN URL in terminal (e.g. http://10.0.0.135:8080/)
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8080,
    open: true,
  },
});

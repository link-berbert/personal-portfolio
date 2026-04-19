import { defineConfig } from "vite";

// Match LightWrk: LAN URL in terminal (e.g. http://10.0.0.135:8080/)
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
});

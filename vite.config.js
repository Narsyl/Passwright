import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        lessons: resolve(__dirname, "lessons.html"),
        instructors: resolve(__dirname, "instructors.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});


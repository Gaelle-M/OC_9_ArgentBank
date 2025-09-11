import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
`root:resolve(__dirname,'index.html')`;

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});

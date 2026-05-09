import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // ✅ Load env based on mode (development / production)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    assetsInclude: ["**/*.docx"],
    server: {
      port: 5001,
      strictPort: true,
    },
    build: {
      outDir: env.VITE_BUILD_DIR || 'dist'
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@helpers": path.resolve(__dirname, "src/helpers"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@routes": path.resolve(__dirname, "src/routes"),
        "@store": path.resolve(__dirname, "src/store"),
        "@theme": path.resolve(__dirname, "src/theme"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@layouts": path.resolve(__dirname, "src/components/layouts"),
        "@atoms": path.resolve(__dirname, "src/components/atoms"),
        "@organisams": path.resolve(__dirname, "src/components/organisams"),
        "@templates": path.resolve(__dirname, "src/components/templates"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            env.VITE_ENV === "3a"
              ? `@use "@/theme/3a.scss" as *;`
              : env.VITE_ENV === "ltts"
                ? `@use "@/theme/ltts.scss" as *;`
                : env.VITE_ENV === "next"
                  ? `@use "@/theme/next.scss" as *;`
                  : env.VITE_ENV === "techm"
                    ? `@use "@/theme/techm.scss" as *;`
                    : env.VITE_ENV === "wipro"
                      ? `@use "@/theme/wipro.scss" as *;`
                      : `@use "@/theme/3a.scss" as *;`,
        },
      },
    },
  };
});

// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/Documents/Test/IceWaterNotIce.github.io/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/Documents/Test/IceWaterNotIce.github.io/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/Documents/Test/IceWaterNotIce.github.io/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "E:\\Documents\\Test\\IceWaterNotIce.github.io";
var __vite_injected_original_import_meta_url = "file:///E:/Documents/Test/IceWaterNotIce.github.io/vite.config.ts";
var INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
var DRIVE_LETTER_REGEX = /^[a-z]:/i;
var vite_config_default = defineConfig({
  plugins: [vue(), vueJsx()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__vite_injected_original_dirname, "src/pages/index.html"),
        test: path.resolve(__vite_injected_original_dirname, "src/pages/test.html"),
        keyboardTraining: path.resolve(__vite_injected_original_dirname, "src/pages/keyboardTraining.html"),
        fbxViewer: path.resolve(__vite_injected_original_dirname, "src/pages/fbxViewer.html")
      },
      output: {
        dir: "_dist",
        // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : "";
          return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "");
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxEb2N1bWVudHNcXFxcVGVzdFxcXFxJY2VXYXRlck5vdEljZS5naXRodWIuaW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXERvY3VtZW50c1xcXFxUZXN0XFxcXEljZVdhdGVyTm90SWNlLmdpdGh1Yi5pb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovRG9jdW1lbnRzL1Rlc3QvSWNlV2F0ZXJOb3RJY2UuZ2l0aHViLmlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcclxuY29uc3QgSU5WQUxJRF9DSEFSX1JFR0VYID0gL1tcXHgwMC1cXHgxRlxceDdGPD4qI1wie318XltcXF1gOz86Jj0rJCxdL2dcclxuY29uc3QgRFJJVkVfTEVUVEVSX1JFR0VYID0gL15bYS16XTovaVxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFt2dWUoKSwgdnVlSnN4KCldLFxyXG4gIGJhc2U6ICcuLycsXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBpbmRleDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9pbmRleC5odG1sJyksXHJcbiAgICAgICAgdGVzdDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy90ZXN0Lmh0bWwnKSxcclxuICAgICAgICBrZXlib2FyZFRyYWluaW5nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL2tleWJvYXJkVHJhaW5pbmcuaHRtbCcpLFxyXG4gICAgICAgIGZieFZpZXdlcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9mYnhWaWV3ZXIuaHRtbCcpXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBkaXI6ICdfZGlzdCcsXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3Nhbml0aXplRmlsZU5hbWUudHNcclxuICAgICAgICBzYW5pdGl6ZUZpbGVOYW1lKG5hbWUpIHtcclxuICAgICAgICAgIGNvbnN0IG1hdGNoID0gRFJJVkVfTEVUVEVSX1JFR0VYLmV4ZWMobmFtZSlcclxuICAgICAgICAgIGNvbnN0IGRyaXZlTGV0dGVyID0gbWF0Y2ggPyBtYXRjaFswXSA6ICcnXHJcbiAgICAgICAgICAvLyBzdWJzdHIgXHU2NjJGXHU4OEFCXHU2REQ4XHU2QzcwXHU4QTlFXHU2Q0Q1XHVGRjBDXHU1NkUwXHU2QjY0XHU4OTgxXHU2NTM5IHNsaWNlXHJcbiAgICAgICAgICByZXR1cm4gZHJpdmVMZXR0ZXIgKyBuYW1lLnNsaWNlKGRyaXZlTGV0dGVyLmxlbmd0aCkucmVwbGFjZShJTlZBTElEX0NIQVJfUkVHRVgsICcnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1QsU0FBUyxlQUFlLFdBQVc7QUFFM1YsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFVBQVU7QUFMakIsSUFBTSxtQ0FBbUM7QUFBMEosSUFBTSwyQ0FBMkM7QUFRcFAsSUFBTSxxQkFBcUI7QUFDM0IsSUFBTSxxQkFBcUI7QUFFM0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxzQkFBc0I7QUFBQSxRQUNyRCxNQUFNLEtBQUssUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxRQUNuRCxrQkFBa0IsS0FBSyxRQUFRLGtDQUFXLGlDQUFpQztBQUFBLFFBQzNFLFdBQVcsS0FBSyxRQUFRLGtDQUFXLDBCQUEwQjtBQUFBLE1BQy9EO0FBQUEsTUFFQSxRQUFRO0FBQUEsUUFDTixLQUFLO0FBQUE7QUFBQSxRQUVMLGlCQUFpQixNQUFNO0FBQ3JCLGdCQUFNLFFBQVEsbUJBQW1CLEtBQUssSUFBSTtBQUMxQyxnQkFBTSxjQUFjLFFBQVEsTUFBTSxDQUFDLElBQUk7QUFFdkMsaUJBQU8sY0FBYyxLQUFLLE1BQU0sWUFBWSxNQUFNLEVBQUUsUUFBUSxvQkFBb0IsRUFBRTtBQUFBLFFBQ3BGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

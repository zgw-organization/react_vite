import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173, // 开发环境启动的端口
    open: true, // 自动打开浏览器
    // proxy: {
    //   "/api": {
    //     // 当遇到 /api 路径时，将其转换成 target 的值
    //     target: "http://xx.xx.xx.xx:8080/api",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""), // 将 /api 重写为空
    //   },
    // },
  },
  // 配置全局 sass 变量：
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
});

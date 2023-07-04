import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 4399, // 开发环境启动的端口
    host: true, // 支持IP访问
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
        additionalData: '@import "@/common/styles/variables.scss";',
      },
    },
  },
  // 打包配置项
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: true, // css拆分
    sourcemap: false, // 不生成sourcemap
    minify: 'terser', // 是否禁用最小化混淆 esbuild(打包速度最快)  terser(打包体积最小)
    assetsInlineLimit: 4000, // 小于该值图片将打包成base64
  },
});

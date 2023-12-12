import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import postcsspxtoviewport from 'postcss-px-to-viewport';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    // 打包时生成gz文件
    {
      ...viteCompression(),
      apply: 'build',
    },
  ],
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 4399, // 开发环境启动的端口
    host: true, // 支持IP访问
    // open: true, // 自动打开浏览器
    // proxy: {
    //   "/api": {
    //     // 当遇到 /api 路径时，将其转换成 target 的值
    //     target: "http://xx.xx.xx.xx:8080/api",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""), // 将 /api 重写为空
    //   },
    // },
  },
  css: {
    // 配置全局 sass 变量：
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/variables.scss";',
      },
    },
    postcss: {
      plugins: [
        // postcsspxtoviewport({
        //   unitToConvert: 'px', // 要转化的单位
        //   viewportWidth: 375, // UI设计稿的宽度
        //   unitPrecision: 6, // 转换后的精度，即小数点位数
        //   propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        //   viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
        //   fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
        //   selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
        //   minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        //   mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        //   replace: true, // 是否转换后直接更换属性值
        //   landscape: false, // 是否处理横屏情况
        // }),
      ],
    },
  },
  // 打包配置项
  build: {
    // 打包配置项
    outDir: 'dist',
    assetsDir: 'static',
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: true, // css拆分
    sourcemap: false, // 不生成sourcemap
    minify: 'esbuild', // 是否禁用最小化混淆 esbuild(打包速度最快)  terser(打包体积最小)
    assetsInlineLimit: 4000, // 小于该值图片将打包成base64
    rollupOptions: {
      output: {
        // 第三方插件分包
        manualChunks: {
          vue: ['vue', 'pinia', 'vue-router'],
          // elementIcons: ['@element-plus/icons-vue'],
        },
        // 拆分css和js
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
});

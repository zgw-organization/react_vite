import { lazy } from 'react';

// 懒加载
const lazyLoad = (moduleName: string) =>
  lazy(() => import(`@/views/${moduleName}/index.tsx`));

// 首页
export const Home = lazyLoad('Home');
// 登录
export const Login = lazyLoad('Login');
// 404
export const ErrorPage = lazyLoad('ErrorPage');
export const ReactQueryDemo = lazyLoad('ReactQueryDemo');

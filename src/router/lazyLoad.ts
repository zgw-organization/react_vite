import { lazy } from 'react';

const lazyLoad = (moduleName: string) =>
  lazy(() => import(`@/pages/${moduleName}/index.tsx`));

export const Home = lazyLoad('Home');
export const ReactQueryDemo = lazyLoad('ReactQueryDemo');

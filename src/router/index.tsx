import ErrorPage from '@/pages/ErrorPage';
import AppLayout from '@/layout/AppLayout';
import { MetaMenu, AuthRouteObject } from './interface';
import { Home, ReactQueryDemo } from './lazyLoad';

const routers: AuthRouteObject<MetaMenu>[] = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    meta: {
      title: '',
    },
    children: [
      {
        path: 'home',
        element: <Home />,
        meta: {
          title: 'Home',
        },
      },
      {
        path: 'query',
        element: <ReactQueryDemo />,
        meta: {
          title: 'React Query',
        },
      },
    ],
  },
];

export default routers;

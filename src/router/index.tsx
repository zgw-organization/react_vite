import AppLayout from '@/layout/AppLayout';
import { MetaMenu, AuthRouteObject } from './interface';
import { ErrorPage, Home, Login, ReactQueryDemo } from './lazyLoad';

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
          title: 'ReactQuery',
        },
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '*',
    element: <ErrorPage />,
    meta: {
      title: '404',
    },
  },
];

export default routers;

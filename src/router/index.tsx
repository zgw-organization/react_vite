import AppLayout from '@/layout/AppLayout';
import { MetaMenu, AuthRouteObject } from './interface';
import { ErrorPage, Home, Login, ReactQueryDemo } from './lazyLoad';
import AuthRoute from '@/components/AuthRoute';
import { Navigate } from 'react-router-dom';

const routers: AuthRouteObject<MetaMenu>[] = [
  {
    path: '/',
    element: (
      <AuthRoute>
        <AppLayout />
      </AuthRoute>
    ),
    meta: {
      title: '',
    },
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        Component: Home,
        meta: {
          title: 'Home',
        },
      },
      {
        path: 'query',
        Component: ReactQueryDemo,
        meta: {
          title: 'ReactQuery',
        },
      },
    ],
  },
  {
    path: '/login',
    Component: Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '*',
    Component: ErrorPage,
    meta: {
      title: '404',
    },
  },
];

export default routers;

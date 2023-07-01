// import classNames from "classnames/bind";
// import styles from "./index.module.scss";
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routers from '@/router';
import { Suspense } from 'react';
import { Spin } from 'antd';

// const cx = classNames.bind(styles);

function App() {
  const GetRoutes = () => useRoutes(routers);
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin />}>
        <GetRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

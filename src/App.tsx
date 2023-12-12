import { BrowserRouter, useRoutes } from 'react-router-dom';
import routers from '@/router';
import { Suspense } from 'react';
import { Spin } from 'antd';

function App() {
  const Routers = () => useRoutes(routers);
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin />}>
        <Routers />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

import ReactDOM from 'react-dom/client';
// 引入全局样式
import '@/assets/styles/global.scss';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { QueryClientProvider } from '@tanstack/react-query';
import client from '@/api/query/query.client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);

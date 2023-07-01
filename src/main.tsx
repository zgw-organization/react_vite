import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClientProvider } from '@tanstack/react-query';
import client from '@/api/query/query.client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);

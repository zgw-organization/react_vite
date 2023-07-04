import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './feature/userSlice';
// 创建store
export const store = configureStore({
  // reducer
  reducer: {
    user: userReducer,
  },
  // 中间件
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // redux-devtools-extension何时开启
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { getDate } from '@/api/feature/app';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type UserType = { [props: string]: string | number | boolean };
export interface UserState {
  users: UserType[];
  total: number;
}
const initialState: UserState = {
  users: [],
  total: 0,
};

// createAsyncThunk创建一个异步action，return出去的值，会在extraReducers中接收，有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
// await dispatch(getUserData()) 会返回一个promise
export const getUserData = createAsyncThunk('user/getList', async () => {
  const res = await getDate();
  return res;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // 类似于mutation
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload.users;
      state.total = payload.total;
    },
    // Reducer 中默认使用 Immer 来更新 Immutable 数据，不用再返回 state
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
      state.total -= 1;
    },
  },
  // 类似于action异步的
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, () => console.log('loading...'))
      // 通常只需要接受fulfilled即可 接收到返回值在同步到state状态中即可
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.users = payload.items;
        state.total = payload.total_count;
      })
      .addCase(getUserData.rejected, (_, err) => console.log('error', err));
  },
});
export const { setUsers } = userSlice.actions;
export default userSlice.reducer;

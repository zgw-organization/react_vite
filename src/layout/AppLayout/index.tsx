import { getUserData } from '@/store/feature/userSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  const { total } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getDate() {
      const res = await dispatch(getUserData());
      console.log(res);
    }
    getDate();
  }, [dispatch]);

  return (
    <div>
      {total}
      AppLayout<Outlet></Outlet>
    </div>
  );
}

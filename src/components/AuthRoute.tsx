import { Navigate } from 'react-router-dom';

function AuthRoute({ children }: any) {
  const isToken = undefined;
  if (!isToken) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default AuthRoute;

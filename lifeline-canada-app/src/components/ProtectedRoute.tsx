import { useAuth } from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user === null) {
    // not logged in
    return <Navigate to="/app?mode=login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

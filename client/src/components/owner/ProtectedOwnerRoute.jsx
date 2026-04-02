import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const ProtectedOwnerRoute = ({ children }) => {
  const { user, loading } = useAppContext();

  if (loading) {
    return null;
  }

  if (!user || user.role !== 'owner') {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedOwnerRoute;

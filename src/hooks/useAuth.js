import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectAuthIsLoading,
} from 'redux/auth/Selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const authIsLoading = useSelector(selectAuthIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    authIsLoading,
  };
};

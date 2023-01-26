import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/Operations';
import { useAuth } from 'hooks/useAuth';
import { Button, Container, Text } from './UseMenu.style';
import { toast } from 'react-toastify';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () =>
    dispatch(logOut())
      .unwrap()
      .then(() => toast.success('You are successfully log out'))
      .catch(() => toast.error('Try reloading the page'));

  return (
    <Container>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Container>
  );
};

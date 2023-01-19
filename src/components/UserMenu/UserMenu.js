import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/Operations';
import { useAuth } from 'hooks/useAuth';
import { Button, Container, Text } from './UseMenu.style';
import { toast } from 'react-toastify';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () =>
    dispatch(logOut(), toast.success(`${user.name} is logout`));

  return (
    <Container>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Container>
  );
};

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/Operations';
import { useAuth } from 'hooks/useAuth';
import { Button, Container, Text } from './UseMenu.style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <Container>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Container>
  );
};

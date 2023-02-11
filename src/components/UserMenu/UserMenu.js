import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/Operations';
import { useAuth } from 'hooks/useAuth';
import { Container, Text } from './UseMenu.style';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, authIsLoading } = useAuth();
  const handleLogOut = () =>
    dispatch(logOut())
      .unwrap()
      .then(() => toast.success('You are successfully log out'))
      .catch(() => toast.error('Try reloading the page'));

  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <Container>
      {!matches && <Text>Welcome, {user.name}</Text>}
      <LoadingButton
        sx={{
          color: 'blue',
          '&:hover': {
            backgroundColor: '#ffffff',
          },
        }}
        size="small"
        loading={authIsLoading}
        variant="outlined"
        color="primary"
        onClick={handleLogOut}
      >
        LogOut
      </LoadingButton>
    </Container>
  );
};

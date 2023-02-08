import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
// import { Header } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: '#2196f3' }}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

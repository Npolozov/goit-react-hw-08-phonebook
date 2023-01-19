import { useAuth } from 'hooks/useAuth';
import { Link } from './Nivigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      {!isLoggedIn && <Link to="/">My phonebook</Link>}
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

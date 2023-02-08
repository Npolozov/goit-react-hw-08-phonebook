import { Link } from './AuthNav.style';
import { Container } from './AuthNav.style';

export const AuthNav = () => {
  return (
    <Container>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Container>
  );
};

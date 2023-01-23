import { Login } from 'components/LoginForm/Login';
import { Helmet } from 'react-helmet-async';

export const LoginForm = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Login />
    </>
  );
};

import { Register } from 'components/Register.js/Register';
import { Helmet } from 'react-helmet-async';

export const RegisterForm = () => {
  return (
    <>
      <Helmet>
        <title>RegisterForm</title>
      </Helmet>
      <Register />
    </>
  );
};

import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { GlobalStyle } from '../GlobalStyles.styled';
import { Layout } from 'components/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/Operations';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { LoginForm } from 'pages/LoginForm';
import { RegisterForm } from 'pages/RegisterForm';
import { PersonalContacts } from 'pages/PersonalContacts';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Home />} />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginForm />}
              />
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<PersonalContacts />}
              />
            }
          ></Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} position="top-right" />
      <GlobalStyle />
    </>
  );
};

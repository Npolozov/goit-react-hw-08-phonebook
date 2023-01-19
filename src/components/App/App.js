import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Contacts } from 'pages/Contacts';
import { GlobalStyle } from '../GlobalStyles.styled';
import { Layout } from 'components/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/Operations';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';

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
          <Route index element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

import { Outlet } from 'react-router-dom';
import { Header } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <div
      className="mainContainer"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

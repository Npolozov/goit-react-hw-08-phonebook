import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  title: {
    marginTop: 200,
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  titleMob: {
    marginTop: 100,
    fontWeight: 500,
    fontSize: 28,
    textAlign: 'center',
  },
  bottomtext: {
    fontWeight: 400,
    fontSize: 28,
    textAlign: 'center',
  },
  bottomtextMob: {
    fontWeight: 300,
    fontSize: 24,
    textAlign: 'center',
  },
  link: {
    color: '#2196f3',
    textDecoration: 'none',
  },
};

export const Home = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={!matches ? styles.title : styles.titleMob}>
        This is a react app for saving your private contacts.
      </h1>
      <p style={!matches ? styles.bottomtext : styles.bottomtextMob}>
        You can{' '}
        <NavLink style={styles.link} to="/register">
          register
        </NavLink>{' '}
        or{' '}
        <NavLink style={styles.link} to="/login">
          login
        </NavLink>{' '}
        if you already have an account.{' '}
      </p>
    </div>
  );
};

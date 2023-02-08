import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    marginTop: 200,
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  bottomtext: {
    fontWeight: 400,
    fontSize: 28,
    textAlign: 'center',
  },
  link: {
    color: '#2196f3',
    textDecoration: 'none',
  },
};

export const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        This is a react app for saving your private contacts.
      </h1>
      <p style={styles.bottomtext}>
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

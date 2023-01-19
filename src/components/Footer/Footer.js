import { Link } from './Footer.styled';

export const Footer = () => {
  return (
    <footer
      style={{
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '25px 0',
        marginTop: 'auto',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 16px' }}>
        <p>
          {'Copyright © '}
          <Link color="inherit" href="https://github.com/Npolozov">
            Created by Polozov Nikita
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </p>
      </div>
    </footer>
  );
};

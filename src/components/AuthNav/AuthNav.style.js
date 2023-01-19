import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background: #2196f3;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

export const Form = styled.form`
  width: 400px;

  @media screen and (max-width: 767px) {
    width: 300px;
  }
`;

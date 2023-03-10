import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

export const Button = styled.button`
  padding: 10px 32px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.9;
  background: #2196f3;
  display: inline-block;
  letter-spacing: 0.06em;
  border-radius: 4px;
  border: none;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: inset 0px 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: white;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

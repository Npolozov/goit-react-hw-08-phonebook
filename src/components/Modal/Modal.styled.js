import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Modal = styled.div`
  width: 500px;
  max-height: 100%;
  border: 1px solid black;
  background-color: white;
  border-radius: 20px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: default;
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;

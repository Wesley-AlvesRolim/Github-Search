import styled from 'styled-components';
import { FaArrowCircleLeft } from 'react-icons/fa';

import { darkGray, primaryBlack } from '../../utils/colors';

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000bf;
  position: fixed;
  top: 0;
  left: 0;

  display: ${(props) => (props.overlayIsActive ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1;

  & > div {
    width: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 720px) {
    & > div {
      width: 95vh;
    }
  }
`;

const FaArrowCircleLeftStyled = styled(FaArrowCircleLeft)`
  position: absolute;
  top: 20px;
  left: 2px;
  cursor: pointer;

  @media (max-width: 720px) {
    top: calc(25vh - 120px);
    left: 5vw;
  }
`;

const Container = styled.div`
  width: 25rem;
  height: 175px;
  margin: 20vh 0 5rem;
  background-color: ${darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 1px ${primaryBlack};
  transition: 0.5s;

  &:hover {
    box-shadow: 0 1px 10px ${primaryBlack};
    transform: translateY(-2px);
  }

  @media (max-width: 720px) {
    height: 15rem;
    width: 95vw;
    padding: 5px;
  }
`;

const Form = styled.form`
  display: grid;
  justify-items: center;

  label {
    margin-bottom: 0.75rem;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;

    h1 {
      text-align: center;
    }
  }

  input {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  button {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  @media (max-width: 720px) {
    input {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    button {
      margin-top: 0.75rem;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }
`;

export {
  Overlay, Container, FaArrowCircleLeftStyled, Form,
};

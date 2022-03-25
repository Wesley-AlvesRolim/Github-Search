import styled from 'styled-components';
import { darkGreen } from '../../utils/colors';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000f2;
  position: fixed;
  top: ${window.scrollY}px;
  left: 0;
  z-index: 5;

  display: grid;
  place-items: center;
`;

const BallsAnimation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Ball = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${darkGreen};
  animation: ballAnimation 2s infinite;
  animation-delay: ${(props) => props.animationDelay}s;
  transform: scale(0);

  @keyframes ballAnimation {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export { Container, BallsAnimation, Ball };

import styled from 'styled-components';
import { lightGreen } from '../../utils/colors';

const Button = styled.button`
    height: 3rem;
    width: ${(props) => (props.largeButton ? '10.5rem' : '5rem')};
    border-radius: 5px;
    background-color: transparent;
    color: #ddd;
    font-size: 1.1rem;
    position: relative;
    overflow: hidden;
    transform: translateY(-2px);
    transition: 0.5s;
    cursor: pointer;

    &:hover{
      color: #fff;
      transform: translateY(0);
      &::before{
        opacity: 0;
      }
      &::after{
        opacity: 1;
        transform-origin: 0 2.5rem;
        transform: ${(props) => (props.largeButton ? 'scale(1) translate(-8px, -3.5rem)' : 'scale(1) translate(-8px,-1.5rem)')};
      }
    }


  &::before{
    content: "";
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    border: 3px solid ${lightGreen};
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s;
  }

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.largeButton ? '190px' : '100px')};
    height: ${(props) => (props.largeButton ? '150px' : '100px')};
    background-color:  ${lightGreen};
    border-radius: 50%;
    transform: translate(-15px, -1.75rem) scale(0.1);
    opacity: 0;
    z-index: -1;
    transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
  }
`;

export { Button };

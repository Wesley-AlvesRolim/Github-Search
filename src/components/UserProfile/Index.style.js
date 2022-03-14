import styled from 'styled-components';
import { darkGray, primaryBlack } from '../../utils/colors';

const Container = styled.div`
  width: 30rem;
  min-height: 250px;
  padding: 10px 0;
  margin: 1rem 0;
  background-color: ${darkGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 1px 1px ${primaryBlack};
  transition: 0.5s;
  & > div {
    display: flex;
  }

  @media (max-width: 720px) {
    width: 100%;
    text-align: center;
    & > div:first-child{
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const ImageBox = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 7.5rem;
    border-radius: 50%;
  }
  @media (max-width: 720px) {
      margin: 0;
  }
`;

const TextBox = styled.div`
  margin: 5px auto;
`;

const LinksBox = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    width: 8.5rem;
    &::after {
      width: 150px;
      height: 150px;
    }
    &:hover {
      &::after {
        transform: scale(1) translate(-8px, -3.5rem);
      }
    }
  }
`;

export {
  Container, ImageBox, LinksBox, TextBox,
};

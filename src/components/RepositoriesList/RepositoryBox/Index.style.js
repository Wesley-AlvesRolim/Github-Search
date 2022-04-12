import styled from 'styled-components';
import { darkGray, primaryBlack } from '../../../utils/colors';

const Container = styled.div`
  width: 100%;
  max-width: 30rem;
  min-height: 250px;
  height: 100%;
  padding: 10px;
  background-color: ${darkGray};
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 1px ${primaryBlack};
  transition: 0.5s;
  overflow-x: hidden;

  &:hover{
    transform: scale(1.005) translate(0px, -5px);
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

const Title = styled.h1`
  width: 100%;
  margin-bottom: 10px;
  color: #eee;
  overflow: hidden;
  a{
    word-break: break-word;
  }
`;

const Contributors = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;

  ul{
    margin-top: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content:  center;

    @media (min-width: 720px) {
      justify-content:  flex-start;
    }

    li+li{
      margin-left: 5px;
    }

    img{
      width: 50px;
      border-radius: 50%;
    }
  }

`;

const Languages = styled.div`
  display: flex;
  flex-direction: column;

  ul{
    margin-top: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content:  space-around;
    gap: 15px;

    @media (min-width: 720px) {
      justify-content:  flex-start;
      gap: 15px 35px;
    }
  }
`;

const ListItemStyled = styled.li`
    min-width: 50px;
    position: relative;

    p{
      margin-left: 15px;
      &::before{
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${(props) => props.color};
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(35%);
      }
    }
`;

const LinkToRepository = styled.a`
    width: 10.5rem;
    margin: 20px auto 0;
`;

export {
  Container, Title, Contributors, Languages, ListItemStyled, LinkToRepository,
};

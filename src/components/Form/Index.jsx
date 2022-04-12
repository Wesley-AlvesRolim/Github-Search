import React, { useState } from 'react';
import propTypes from 'prop-types';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

import { Input } from './Input/Index';
import { ButtonComponent as Button } from '../Button/Index';
import { Loading } from '../Loading/Index';
import { UserProfile } from '../UserProfile/Index';
import {
  Container, Overlay, FaArrowCircleLeftStyled, Form as FormStyled,
} from './Index.style';

import { LocalStorage } from '../../utils/localStorage';

function Form({ reloadUsersList, setReloadUsersList }) {
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [overlayIsActive, setOverlayIsActive] = useState(false);

  const handleClick = () => {
    setOverlayIsActive(false);
  };

  const handleSubmit = async (event) => {
    try {
      setIsLoading(true);
      event.preventDefault();
      const myLocalStorage = new LocalStorage('latest_research');
      const dataInLocalStorage = myLocalStorage.getItem();

      const { data } = await axios.get(user);

      const foundURLIndex = dataInLocalStorage.findIndex(
        (userInLocalStorage) => userInLocalStorage.url === data.url,
      );
      setUserData(data);
      setIsLoading(false);
      setTimeout(() => {
        setOverlayIsActive(true);
      }, 100);

      if (foundURLIndex !== -1) {
        dataInLocalStorage.splice(foundURLIndex, 1);
      }

      dataInLocalStorage.push({ url: data.url, researchTime: Date.now() });
      myLocalStorage.setItem(dataInLocalStorage);
      setReloadUsersList(!reloadUsersList);
    } catch {
      toast.error('Tivemos um problema para encontrar o usuário. Tente novamente mais tarde!');
      setIsLoading(false);
    }
  };
  return (
    <>
      <Loading isLoading={isLoading} />
      {(userData.login && !isLoading) && (
        <Overlay overlayIsActive={overlayIsActive}>
          <div>
            <FaArrowCircleLeftStyled size="2em" onClick={handleClick} />
            <UserProfile
              username={userData.login}
              avatar={userData.avatar_url}
              githubURL={userData.html_url}
              location={userData.location}
              publicRepositories={userData.public_repos}
              followers={userData.followers}
              following={userData.following}
            />
          </div>
        </Overlay>
      )}
      <Container>
        <FormStyled onSubmit={handleSubmit}>
          <label htmlFor="profile"><h1>Pesquise um perfil do Github:</h1></label>
          <Input user={user} setUser={setUser} />
          <Button type="submit">Buscar</Button>
        </FormStyled>
      </Container>
    </>
  );
}

Form.propTypes = {
  reloadUsersList: propTypes.bool.isRequired,
  setReloadUsersList: propTypes.func.isRequired,
};

export { Form };

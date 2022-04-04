import React, { useState } from 'react';
import propTypes from 'prop-types';
import axios from '../../services/axios';

import { Input } from './Input/Index';
import { Loading } from '../Loading/Index';
import { UserProfile } from '../UserProfile/Index';
import { Container, Button, Overlay } from './Index.style';

import { LocalStorage } from '../../utils/localStorage';

function Form({ setReloadUsersList }) {
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = async (event) => {
    try {
      setIsLoading(true);
      event.preventDefault();
      const myLocalStorage = new LocalStorage('latest_research');
      const dataInLocalStorage = myLocalStorage.getItem();

      const { data } = await axios.get(user);

      const foundURL = dataInLocalStorage.some(
        (userInLocalStorage) => userInLocalStorage.url === data.url,
      );
      setUserData(data);
      setIsLoading(false);
      setOverlayIsActive(true);

      if (foundURL) return;
      dataInLocalStorage.push({ url: data.url, researchTime: Date.now() });
      myLocalStorage.setItem(dataInLocalStorage);
      setReloadUsersList(true);
    } catch {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Loading isLoading={isLoading} />
      {userData.login && (
        <Overlay isActive={isActive}>
          <UserProfile
            username={userData.login}
            avatar={userData.avatar_url}
            githubURL={userData.html_url}
            location={userData.location}
            publicRepositories={userData.public_repos}
            followers={userData.followers}
            following={userData.following}
          />
        </Overlay>
      )}
      <Container>
        <form onSubmit={handleSubmit}>
          <label htmlFor="profile"><h1>Pesquise um perfil do Github:</h1></label>
          <Input user={user} setUser={setUser} />
          <Button type="submit">Buscar</Button>
        </form>
      </Container>
    </>
  );
}

Form.propTypes = {
  setReloadUsersList: propTypes.func.isRequired,
};

export { Form };

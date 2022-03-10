import React, { useState } from 'react';
import axios from '../../services/axios';

import { Input } from './Input/Index';
import { Loading } from '../Loading/Index';
import { UserProfile } from '../UserProfile/Index';
import { Container, Button, Overlay } from './Index.style';

import { LocalStorage } from '../../utils/localStorage';

function Form() {
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

      const foundURL = dataInLocalStorage.some((url) => url === data.url);
      setUserData(data);
      setIsLoading(false);
      setIsActive(true);

      if (foundURL) return;
      dataInLocalStorage.push(data.url);
      myLocalStorage.setItem(dataInLocalStorage);
    } catch (error) {
      console.error(error);
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

export { Form };

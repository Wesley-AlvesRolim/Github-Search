import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
import { Form } from '../../components/Form/Index';
import { UserProfile } from '../../components/UserProfile/Index';
import { Loading } from '../../components/Loading/Index';
import { Container, Title } from './Index.style';

import { LocalStorage } from '../../utils/localStorage';

function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reloadUsersList, setReloadUsersList] = useState(false);

  function getData() {
    try {
      setIsLoading(true);

      const dataInLocalStorage = new LocalStorage('latest_research').getItem();
      const usersCollection = dataInLocalStorage.map(async (user) => {
        const newURL = user.url.split('https://api.github.com/users/]').join();
        const { data } = await axios.get(newURL);
        return data;
      });

      usersCollection.forEach(async (user) => {
        const data = await user;
        const usersHasData = users.some((userInState) => userInState.id === data.id);
        if (usersHasData) return;

        setUsers((previousState) => [...previousState, data]);
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch {
      setIsLoading(false);
    }
  }
  useEffect(() => { getData(); }, [reloadUsersList]);

  return (
    <>
      <Loading isLoading={isLoading} />

      <Form reloadUsersList={reloadUsersList} setReloadUsersList={setReloadUsersList} />
      <Container>
        <Title>Ultimas pesquisas</Title>
        <ul>
          {
          users.map((user) => (
            <li key={user.login}>
              <UserProfile
                username={user.login}
                avatar={user.avatar_url}
                githubURL={user.html_url}
                location={user.location}
                publicRepositories={user.public_repos}
                followers={user.followers}
                following={user.following}
              />
            </li>
          ))
        }
        </ul>
      </Container>
    </>
  );
}

export { Home };

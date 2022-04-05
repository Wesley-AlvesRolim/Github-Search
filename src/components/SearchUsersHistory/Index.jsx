import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from '../../services/axios';
import { LocalStorage } from '../../utils/localStorage';

import { UserProfile } from '../UserProfile/Index';
import { Container, Title } from './Index.style';

function orderUsers(usersCollection) {
  return usersCollection.sort((a, b) => b.researchTime - a.researchTime);
}

function SearchUsersHistory({
  reloadUsersList, setIsLoading,
}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function getData() {
      try {
        setIsLoading(true);

        const dataInLocalStorage = new LocalStorage('latest_research').getItem();
        const usersCollection = dataInLocalStorage.map(async (user) => {
          const newURL = user.url.split('https://api.github.com/users/]').join();
          const { data } = await axios.get(newURL);
          data.researchTime = user.researchTime;
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
    getData();
  }, [reloadUsersList]);

  return (
    users.length !== 0 && (
    <Container>
      <Title>Ultimas pesquisas</Title>
      <ul>
        {orderUsers(users).map((user) => (
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
        ))}
      </ul>
    </Container>
    )
  );
}

SearchUsersHistory.propTypes = {
  reloadUsersList: propTypes.bool.isRequired,
  setIsLoading: propTypes.func.isRequired,
};

export { SearchUsersHistory };

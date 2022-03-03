import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
import { Form } from '../../components/Form/Index';
import { UserProfile } from '../../components/UserProfile/Index';
import { Container, Title } from './Index.style';

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async function getData() {
      const { data } = await axios.get('Wesley-AlvesRolim');
      setUsers([data]);
    }());
  }, []);

  return (
    <>
      <Form />
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

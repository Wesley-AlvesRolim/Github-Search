import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import {
  Container, ImageBox, LinksBox, TextBox,
} from './Index.style';

import { ButtonComponent as Button } from '../Button/Index';

function UserProfile({
  username, avatar, githubURL, location = '', publicRepositories, followers, following,
}) {
  return (
    <Container>
      <div>
        <ImageBox>
          <img src={avatar} alt={username} />
          <a href={`${githubURL}?tab=following`} target="_blank" rel="noreferrer">
            {`${following} seguindo.`}
          </a>
          <a href={`${githubURL}?tab=followers`} target="_blank" rel="noreferrer">
            {`${followers} seguidores.`}
          </a>
        </ImageBox>
        <TextBox>
          <h2>{username}</h2>
          <p>
            {location && `Mora em ${location}`}
          </p>
          <p>
            {`Tem ${publicRepositories} ${publicRepositories === 1 ? 'repositório público' : 'repositórios públicos'}.`}
          </p>
        </TextBox>
      </div>
      <LinksBox>
        <a href={githubURL} target="_blank" rel="noreferrer">
          <Button>
            Visitar o Github
          </Button>
        </a>
        {publicRepositories !== 0 && (
        <Link to={`/repositories?q=${username}`}>
          <Button>
            Visualizar os repositórios
          </Button>
        </Link>
        )}
      </LinksBox>
    </Container>
  );
}

UserProfile.propTypes = {
  username: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  githubURL: propTypes.string.isRequired,
  location: propTypes.string,
  publicRepositories: propTypes.number.isRequired,
  followers: propTypes.number.isRequired,
  following: propTypes.number.isRequired,
};

UserProfile.defaultProps = {
  location: '',
};

export { UserProfile };

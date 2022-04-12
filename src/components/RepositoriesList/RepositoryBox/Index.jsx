import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import axios from 'axios';

import { ButtonComponent as Button } from '../../Button/Index';

import {
  Title, Contributors, Languages, ListItemStyled, LinkToRepository, Container,
} from './Index.style';

let languagesColors;
(async function getColors() {
  const { data } = await axios.get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json');
  languagesColors = data;
}());

function RepositoryBox({ repository }) {
  const navigate = useNavigate();
  const [contributors, setContributors] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let { data } = await axios.get(repository.contributors_url);
        const { data: languagesData } = await axios.get(repository.languages_url);
        const addColorsToLanguages = Object.entries(languagesData).map((language) => ({
          color: languagesColors[language[0]].color,
          language: language[0],
          code: language[1],
        }));

        if (typeof data !== 'object') {
          data = [];
        }
        setContributors(data);
        setLanguages(addColorsToLanguages);
      } catch (err) {
        navigate('/', { replace: true });
      }
    }
    getData();
  }, []);
  return (
    <Container>
      <Title>
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer" title={repository.name}>
          {repository.name}
        </a>
      </Title>
      <p>
        {repository.description || 'Este repositório não tem descrição.'}
      </p>
      <Contributors>
        <p>Colaborador(es):</p>
        <ul>
          {
            contributors.length > 0
              ? (
                contributors.map(
                  (contributor) => (
                    <li key={contributor.html_url}>
                      <a href={contributor.html_url} title={contributor.login} target="_blank" rel="noopener noreferrer">
                        <img src={contributor.avatar_url} alt={`Foto de perfil do ${contributor.login}`} />
                      </a>
                    </li>
                  ),
                )
              ) : 'Nenhuma contribuição encontrada!'
          }
        </ul>
      </Contributors>
      <Languages>
        <p>Linguagem(ens):</p>
        <ul>
          {
            languages.length > 0
              ? (
                languages.map(
                  (language) => (
                    <ListItemStyled
                      key={language.code}
                      color={language.color}
                    >
                      <p>
                        {language.language}
                      </p>
                    </ListItemStyled>
                  ),
                )
              )
              : 'Nenhuma linguagem identificada neste repositório.'
          }
        </ul>
      </Languages>
      <LinkToRepository href={repository.html_url} target="_blank" rel="noopener noreferrer">
        <Button sizeButton>Visitar o repositório</Button>
      </LinkToRepository>
    </Container>
  );
}

RepositoryBox.propTypes = {
  repository: propTypes.shape({
    name: propTypes.string.isRequired,
    description: propTypes.string,
    contributors_url: propTypes.string.isRequired,
    languages_url: propTypes.string.isRequired,
    html_url: propTypes.string.isRequired,
  }).isRequired,
};

RepositoryBox.defaultProps = [
  propTypes.shape({
    description: '',
  }),
];

export { RepositoryBox };

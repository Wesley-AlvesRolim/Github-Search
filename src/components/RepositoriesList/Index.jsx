import propTypes from 'prop-types';
import { RepositoryBox } from './RepositoryBox/Index';
import { RepositoriesListContainer, RepositoryNotFound } from './Index.style';

function RepositoriesList({ userRepositoriesToShowToUser }) {
  return (
    userRepositoriesToShowToUser.data.length > 0 ? (
      <RepositoriesListContainer>
        {
            userRepositoriesToShowToUser.data.map((repository) => (
              <li key={repository.id}>
                <RepositoryBox repository={repository} />
              </li>
            ))
          }
      </RepositoriesListContainer>
    ) : <RepositoryNotFound>Nenhum repositório encontrado.</RepositoryNotFound>
  );
}

RepositoriesList.propTypes = {
  userRepositoriesToShowToUser: propTypes.shape({
    data: propTypes.arrayOf(propTypes.shape({})).isRequired,
  }).isRequired,
};

export { RepositoriesList };

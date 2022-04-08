import propTypes from 'prop-types';

function RepositoriesList({ userRepositoriesToShowToUser }) {
  return (
    userRepositoriesToShowToUser.data.length > 0 ? (
      userRepositoriesToShowToUser.data.map((repository) => (
        <li key={repository.id}>
          <a href={repository.html_url} target="_blank" rel="noopener noreferrer" title={repository.name}>
            {repository.name}
          </a>
          <p>
            {repository.description || 'Este repositório não tem descrição.'}
          </p>

          <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
            Visitar o repositório
          </a>
        </li>
      ))
    ) : <h2>Nenhum repositório encontrado.</h2>
  );
}

RepositoriesList.propTypes = {
  userRepositoriesToShowToUser: propTypes.shape({
    data: propTypes.arrayOf(propTypes.shape({})).isRequired,
  }).isRequired,
};

export { RepositoriesList };

import { useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { FaArrowCircleLeft, FaSearch } from 'react-icons/fa';

import { Header } from './Index.style';

function RepositoriesHeader({ userRepositoriesData, setUserRepositoriesToShowToUser }) {
  const [inputSearch, setInputSearch] = useState('');

  function handleChange(event) {
    const inputValue = event.target.value;
    const inputValueWithLowerCase = String(inputValue).toLowerCase();
    const regex = new RegExp(`\\b[A-Za-z0-9]*?${inputValueWithLowerCase}[A-Za-z0-9]*\\b`);

    const matchWithRegexExpression = (textToMatch) => (
      ((textToMatch || '').toLocaleLowerCase()).match(regex) !== null);

    const searchResult = userRepositoriesData.data.filter((repository) => (
      matchWithRegexExpression(repository.name)
        || matchWithRegexExpression(repository.description)
        || matchWithRegexExpression(repository.language)
    ));

    setUserRepositoriesToShowToUser({ data: searchResult });
    setInputSearch(inputValue);
  }

  return (
    <Header>
      <Link to={-1}>
        <FaArrowCircleLeft size="2em" />
      </Link>

      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="search-repository">
          <FaSearch size="1.5em" />
        </label>
        <input
          id="search-repository"
          type="search"
          placeholder="Pesquise um repositório aqui!"
          value={inputSearch}
          onChange={handleChange}
        />
      </form>
    </Header>
  );
}

RepositoriesHeader.propTypes = {
  userRepositoriesData: propTypes.shape({
    data: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string.isRequired,
        description: propTypes.string,
        language: propTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  setUserRepositoriesToShowToUser: propTypes.func.isRequired,
};

export { RepositoriesHeader };

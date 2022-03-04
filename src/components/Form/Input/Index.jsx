import React from 'react';
import propTypes from 'prop-types';

import { InputStyled } from './Index.style';

function Input({ user, setUser }) {
  return (
    <InputStyled
      id="profile"
      type="text"
      placeholder="Digite o @"
      required
      value={user}
      onChange={(e) => setUser(e.target.value)}
    />
  );
}

Input.propTypes = {
  user: propTypes.string.isRequired,
  setUser: propTypes.func.isRequired,
};

export { Input };

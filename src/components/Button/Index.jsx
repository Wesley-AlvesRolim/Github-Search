import React from 'react';
import propTypes from 'prop-types';

import { Button } from './Index.style';

function ButtonComponent({ type = 'button', children }) {
  return (
    <Button type={type}>{children}</Button>
  );
}

ButtonComponent.propTypes = {
  type: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.element, propTypes.string,
  ]).isRequired,
};

ButtonComponent.defaultProps = {
  type: 'button',
};

export { ButtonComponent };

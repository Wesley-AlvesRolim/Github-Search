import React from 'react';
import propTypes from 'prop-types';

import { Button } from './Index.style';

function ButtonComponent({ type = 'button', modifyWidth = false, children }) {
  return (
    <Button type={type} modifyWidth={modifyWidth}>{children}</Button>
  );
}

ButtonComponent.propTypes = {
  type: propTypes.string,
  modifyWidth: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.element, propTypes.string,
  ]).isRequired,
};

ButtonComponent.defaultProps = {
  type: 'button',
  modifyWidth: false,
};

export { ButtonComponent };

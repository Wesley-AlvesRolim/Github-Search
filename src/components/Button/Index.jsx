import React from 'react';
import propTypes from 'prop-types';

import { Button } from './Index.style';

function ButtonComponent({
  type = 'button', largeButton = false, children, ...props
}) {
  return (
    <Button {...props} type={type} largeButton={largeButton}>{children}</Button>
  );
}

ButtonComponent.propTypes = {
  type: propTypes.string,
  largeButton: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.element, propTypes.string,
  ]).isRequired,
  props: propTypes.node,
};

ButtonComponent.defaultProps = {
  type: 'button',
  largeButton: false,
  props: '',
};

export { ButtonComponent };

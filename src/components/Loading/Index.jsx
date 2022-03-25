import React from 'react';
import propTypes from 'prop-types';

import { Container, BallsAnimation, Ball } from './Index.style';

function Loading({ isLoading }) {
  return isLoading ? (
    <Container>
      <div>
        <BallsAnimation>
          <Ball animationDelay="0.5" />
          <Ball animationDelay="1" />
          <Ball animationDelay="1.5" />
        </BallsAnimation>
        <h1>Carregando</h1>
      </div>
    </Container>
  ) : '';
}

Loading.propTypes = {
  isLoading: propTypes.bool.isRequired,
};

export { Loading };

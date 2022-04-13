import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonComponent as Button } from '../../components/Button/Index';
import { Container } from './Index.style';

let decrementTimeOut;

function PageNotFound() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    if (counter === 0) {
      navigate('/', { replace: true });
      return;
    }

    decrementTimeOut = setTimeout(() => {
      setCounter((previousCounterNumber) => previousCounterNumber - 1);
    }, 1000);
  }, [counter]);

  function handleClick() {
    clearTimeout(decrementTimeOut);
    navigate('/', { replace: true });
  }

  return (
    <Container>
      <h1>Ops... Não encontramos esta página.</h1>
      <div>
        <p>
          Estamos te redirecionando para a home em
          {' '}
          {counter}
          {' '}
          segundos.
        </p>
        <Button largeButton onClick={handleClick}>
          Voltar agora
        </Button>
      </div>
    </Container>
  );
}

export { PageNotFound };

import { useState } from 'react';
import { Loading } from '../../components/Loading/Index';
import { Form } from '../../components/Form/Index';
import { SearchUsersHistory } from '../../components/SearchUsersHistory/Index';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [reloadUsersList, setReloadUsersList] = useState(false);

  return (
    <>
      <Loading isLoading={isLoading} />

      <Form reloadUsersList={reloadUsersList} setReloadUsersList={setReloadUsersList} />

      <SearchUsersHistory
        reloadUsersList={reloadUsersList}
        setIsLoading={setIsLoading}
      />
    </>
  );
}

export { Home };

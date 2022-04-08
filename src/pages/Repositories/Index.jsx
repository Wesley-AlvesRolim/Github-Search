import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from '../../services/axios';

import { Loading } from '../../components/Loading/Index';
import { RepositoriesList } from '../../components/RepositoriesList/Index';

function Repositories() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [userRepositoriesData, setUserRepositoriesData] = useState({ data: [] });
  const [userRepositoriesToShowToUser, setUserRepositoriesToShowToUser] = useState({ data: [] });

  useEffect(() => {
    (async function getData() {
      try {
        setIsLoading(true);
        const userInParams = searchParams.toString().split('q=').join('');
        const { data } = await axios.get(`${userInParams}/repos`);
        setUserRepositoriesData({ data });
        setUserRepositoriesToShowToUser({ data });
        setTimeout(() => setIsLoading(false), 3000);
      } catch {
        navigate('/', { replace: true });
        setIsLoading(false);
      }
    }());
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />

      <RepositoriesList userRepositoriesToShowToUser={userRepositoriesToShowToUser} />
    </>
  );
}

export { Repositories };

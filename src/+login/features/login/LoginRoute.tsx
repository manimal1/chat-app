import React, { FC } from 'react';

import { useGetCurrentUser } from 'hooks';

import { LoginFormContainer } from './containers';

import './LoginRoute.css';

export const LoginRoute: FC = () => {
  const currentUser = useGetCurrentUser();

  // TODO: remove when routing added
  if (currentUser) {
    return null;
  }

  return (
    <section className="LoginRoute">
      <LoginFormContainer />
    </section>
  );
};

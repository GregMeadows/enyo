import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { ActionParam } from '../assets/routes';
import CreateProduct from '../components/actions/createProduct';
import Main from '../components/Main';
import { KeyElement } from '../types';

const Action: FunctionComponent = () => {
  const { action } = useParams<ActionParam>();

  const actions: KeyElement = {
    createproduct: <CreateProduct />,
  };

  return <Main>{actions[action]}</Main>;
};

export default Action;

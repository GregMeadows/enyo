import React, { FunctionComponent, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useTitle from '../hooks/useTitle';
import Main from '../components/Main';
import { listProducts as ListProducts } from '../graphql/queries';
import callGraphQL from '../graphql';
import { ListProductsQuery } from '../graphql/API';
import { Product } from '../graphql/types';

const useStyles = makeStyles(
  () => ({
    title: {
      marginTop: '2rem',
      marginBottom: '2rem',
    },
  }),
  {
    classNamePrefix: 'store',
  }
);

const Store: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  useTitle(t('pages.store.title'));

  const [products, setProducts] = useState<Product[]>([]);

  // Query the API and save them to the state
  async function listProducts() {
    const listProductsQuery = await callGraphQL<ListProductsQuery>(
      ListProducts
    );
    if (listProductsQuery.data?.listProducts?.items) {
      setProducts(listProductsQuery.data?.listProducts?.items as Product[]);
    }
  }

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <Main>
      <Typography variant="body1" className={classes.title}>
        {t('pages.store.intro')}
      </Typography>
      {products.map((product) => (
        <Typography variant="body1" className={classes.title} key={product.id}>
          {product.name}
        </Typography>
      ))}
    </Main>
  );
};
export default Store;

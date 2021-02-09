import React, { FunctionComponent, useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import AddIcon from '@material-ui/icons/Add';
import useTitle from '../hooks/useTitle';
import Main from '../components/Main';
import { listProducts as ListProducts } from '../graphql/queries';
import callGraphQL from '../graphql';
import { ListProductsQuery } from '../graphql/API';
import { Product } from '../graphql/types';
import STEPS_CREATE_PRODUCT from '../components/actions/createProduct';
import DialogStepper from '../components/DialogStepper';

const useStyles = makeStyles(
  (theme: Theme) => ({
    title: {
      marginTop: '2rem',
      marginBottom: '2rem',
    },
    list: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    product: {
      background: theme.palette.background.paper,
      height: '20rem',
      width: '16rem',
      margin: theme.spacing(1),
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    productImage: {
      flexGrow: 1,
    },
    productName: {
      marginTop: '1rem',
      marginBottom: '1rem',
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
  const [createProductDialogOpen, setCreateProductDialogOpen] = useState(false);

  const handleCreateProductDialogClose = () => {
    setCreateProductDialogOpen(false);
  };

  const handleCreateProductDialogOpen = () => {
    setCreateProductDialogOpen(true);
  };

  // Query the API and save them to the state
  async function listProducts() {
    const listProductsQuery = await callGraphQL<ListProductsQuery>(
      ListProducts
    );
    if (listProductsQuery.data?.listProducts?.items) {
      setProducts(listProductsQuery.data.listProducts.items as Product[]);
    }
  }

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
      <Main>
        <Typography variant="body1" className={classes.title}>
          {t('pages.store.intro')}
        </Typography>
        <div className={classes.list}>
          <Button
            className={classes.product}
            onClick={handleCreateProductDialogOpen}
          >
            <AddIcon fontSize="large" />
          </Button>
          {products.map((product) => (
            <div key={product.id} className={classes.product}>
              <div className={classes.productImage} />
              <Typography
                variant="body1"
                className={classes.productName}
                key={product.id}
              >
                {product.name}
              </Typography>
            </div>
          ))}
        </div>
      </Main>
      <DialogStepper
        open={createProductDialogOpen}
        onClose={handleCreateProductDialogClose}
        steps={STEPS_CREATE_PRODUCT}
      />
    </>
  );
};
export default Store;

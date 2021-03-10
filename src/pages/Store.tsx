import React, { FunctionComponent, useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import AddIcon from '@material-ui/icons/Add';
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import useTitle from '../hooks/useTitle';
import Main from '../components/Main';
import { listProducts as ListProducts } from '../graphql/queries';
import callGraphQL from '../graphql';
import {
  CreateImageInput,
  CreateProductInput,
  ListProductsQuery,
} from '../graphql/API';
import { Product } from '../graphql/types';
import {
  CreateProductForm,
  INITIAL_CREATE_PRODUCT,
  STEPS_CREATE_PRODUCT,
} from '../components/forms/products/create';
import DialogStepper from '../components/DialogStepper';
import { FormikValues } from '../types';
import config from '../aws-exports.js';
import {
  createImage as CreateImage,
  createProduct as CreateProduct,
} from '../graphql/mutations';

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

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

  const handleCreateProductDialogSubmit = async (values: FormikValues) => {
    const typedValues = values as CreateProductForm;

    if (!typedValues.price) {
      // eslint-disable-next-line no-console
      console.error('Price was not set');
      return;
    }

    // User object cannot be properly typed
    // See: https://github.com/aws-amplify/amplify-js/issues/4927
    const user = await Auth.currentAuthenticatedUser();
    const userName = user.name;

    // Store product images
    typedValues.files.forEach(async (fileWithDescription, index) => {
      const extension = fileWithDescription.file.name.split('.').pop();
      const { type: mimeType } = fileWithDescription.file;

      // Add image to upload array
      const key = `${typedValues.id}.${index}.${Date.now()}.${extension}`;
      const url = `https://${bucket}.s3.${region}.amazonaws.com/public/products/images/${key}`;

      const imageInput: CreateImageInput = {
        id: key,
        productID: typedValues.id,
        url,
        description: fileWithDescription.description,
      };

      try {
        await Storage.put(key, fileWithDescription, {
          contentType: mimeType,
        });
        await API.graphql(graphqlOperation(CreateImage, { input: imageInput }));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Error storing file:', e);
      }
    });

    // Add Product API call
    const productInput: CreateProductInput = {
      id: typedValues.id,
      name: typedValues.name,
      description: typedValues.description,
      price: typedValues.price,
      createdBy: userName,
    };
    try {
      await API.graphql(
        graphqlOperation(CreateProduct, { input: productInput })
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error on mutation:', e);
    }
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
        steps={STEPS_CREATE_PRODUCT}
        initialValues={INITIAL_CREATE_PRODUCT}
        open={createProductDialogOpen}
        onClose={handleCreateProductDialogClose}
        onSubmit={handleCreateProductDialogSubmit}
      />
    </>
  );
};
export default Store;

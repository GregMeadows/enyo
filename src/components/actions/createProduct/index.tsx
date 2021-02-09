import React from 'react';
import { StepProps } from '../../DialogStepper';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';
import Confirm from './Confirm';

const STEPS_CREATE_PRODUCT: StepProps[] = [
  {
    // t('pages.action.createproduct.details.title')
    nameKey: 'pages.action.createproduct.details.title',
    Content: <ProductDetails />,
  },
  {
    // t('pages.action.createproduct.images.title')
    nameKey: 'pages.action.createproduct.images.title',
    Content: <ProductImages />,
  },
  {
    // t('pages.action.createproduct.confirm.title')
    nameKey: 'pages.action.createproduct.confirm.title',
    Content: <Confirm />,
  },
];

export default STEPS_CREATE_PRODUCT;

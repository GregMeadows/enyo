import React from 'react';
import * as yup from 'yup';
import { StepProps } from '../../DialogStepper';
import FormBuilder, { FormItem } from '../../FormBuilder';

export interface CreateProductForm {
  name: string;
  price: number;
  description: string;
}

/**
 * Form Objects
 */

export const FORM_DETAILS: FormItem[] = [
  {
    name: 'name',
    type: 'text',
    // t('pages.action.createproduct.details.name')
    labelKey: 'pages.action.createproduct.details.name',
  },
  {
    name: 'price',
    type: 'number',
    // t('pages.action.createproduct.details.price')
    labelKey: 'pages.action.createproduct.details.price',
  },
  {
    name: 'description',
    type: 'multiline',
    // t('pages.action.createproduct.details.description')
    labelKey: 'pages.action.createproduct.details.description',
  },
];

const PRODUCT_IMAGES: FormItem[] = [
  {
    name: 'upload',
    type: 'file',
    // t('pages.action.createproduct.images.upload')
    labelKey: 'pages.action.createproduct.images.upload',
    props: { acceptedTypes: ['image/*'] },
  },
];

/**
 * Initial Values
 */
export const INITIAL_CREATE_PRODUCT = {
  name: '',
  price: '',
  description: '',
};

/**
 * Steps
 */

export const STEPS_CREATE_PRODUCT: StepProps[] = [
  {
    // t('pages.action.createproduct.details.title')
    stepLabel: 'pages.action.createproduct.details.title',
    content: <FormBuilder items={FORM_DETAILS} />,
    validationSchema: yup.object({
      name: yup.string().required('Product name is required'),
      price: yup
        .number()
        .positive('Price must be positive')
        .required('Product price is required'),
      description: yup
        .string()
        .min(10, 'Description should be a min of 10 characters length')
        .required('Product description is required'),
    }),
  },
  {
    // t('pages.action.createproduct.images.title')
    stepLabel: 'pages.action.createproduct.images.title',
    content: <FormBuilder items={PRODUCT_IMAGES} />,
  },
  {
    // t('pages.action.createproduct.confirm.title')
    stepLabel: 'pages.action.createproduct.confirm.title',
    content: <></>,
  },
];

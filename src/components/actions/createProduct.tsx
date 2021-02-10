import React from 'react';
import { StepProps } from '../DialogStepper';
import FormBuilder, { FormItem } from '../FormBuilder';

const PRODUCT_DETAILS: FormItem[] = [
  {
    type: 'text',
    required: true,
    // t('pages.action.createproduct.details.name')
    labelKey: 'pages.action.createproduct.details.name',
  },
  {
    type: 'text',
    required: true,
    // t('pages.action.createproduct.details.price')
    labelKey: 'pages.action.createproduct.details.price',
  },
  {
    type: 'multiline',
    required: true,
    // t('pages.action.createproduct.details.description')
    labelKey: 'pages.action.createproduct.details.description',
  },
];

const PRODUCT_IMAGES: FormItem[] = [
  {
    type: 'file',
    required: true,
    // t('pages.action.createproduct.images.upload')
    labelKey: 'pages.action.createproduct.images.upload',
  },
  {
    type: 'text',
    required: true,
    // t('pages.action.createproduct.images.description')
    labelKey: 'pages.action.createproduct.images.description',
  },
];

const STEPS_CREATE_PRODUCT: StepProps[] = [
  {
    // t('pages.action.createproduct.details.title')
    nameKey: 'pages.action.createproduct.details.title',
    Content: <FormBuilder items={PRODUCT_DETAILS} />,
  },
  {
    // t('pages.action.createproduct.images.title')
    nameKey: 'pages.action.createproduct.images.title',
    Content: <FormBuilder items={PRODUCT_IMAGES} />,
  },
  {
    // t('pages.action.createproduct.confirm.title')
    nameKey: 'pages.action.createproduct.confirm.title',
    Content: <></>,
  },
];

export default STEPS_CREATE_PRODUCT;

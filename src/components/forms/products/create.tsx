import React from 'react';
import * as yup from 'yup';
import { SUPPORTED_IMAGE_FORMATS } from '../../../assets/consts';
import { FileWithDescription } from '../../../types';
import { StepProps } from '../../DialogStepper';
import FormBuilder, { FormItem } from '../../FormBuilder';
import Confirmation from '../../Confirmation';

export interface CreateProductForm {
  [key: string]: unknown;
  name: string;
  price: number | null;
  description: string;
  files: FileWithDescription[];
}

export const INITIAL_CREATE_PRODUCT: CreateProductForm = {
  name: '',
  price: null,
  description: '',
  files: [],
};

/**
 * Form Objects
 */

export const FORM_DETAILS: FormItem[] = [
  {
    name: 'name',
    type: 'text',
    // t('forms.products.create.details.name')
    labelKey: 'forms.products.create.details.name',
  },
  {
    name: 'price',
    type: 'number',
    // t('forms.products.create.details.price')
    labelKey: 'forms.products.create.details.price',
  },
  {
    name: 'description',
    type: 'multiline',
    // t('forms.products.create.details.description')
    labelKey: 'forms.products.create.details.description',
  },
];

const PRODUCT_IMAGES: FormItem[] = [
  {
    name: 'files',
    type: 'files',
    // t('forms.products.create.images.upload')
    labelKey: 'forms.products.create.images.upload',
    props: { acceptedTypes: SUPPORTED_IMAGE_FORMATS },
  },
];

/**
 * Steps
 */

export const STEPS_CREATE_PRODUCT: StepProps[] = [
  {
    // t('forms.products.create.details.title')
    stepLabel: 'forms.products.create.details.title',
    content: <FormBuilder items={FORM_DETAILS} />,
    validationSchema: yup.object({
      // t('forms.products.create.details.validation.name.required')
      name: yup
        .string()
        .required('forms.products.create.details.validation.name.required'),
      // t('forms.products.create.details.validation.price.positive')
      // t('forms.products.create.details.validation.price.type')
      // t('forms.products.create.details.validation.price.required')
      price: yup
        .number()
        .typeError('forms.products.create.details.validation.price.type')
        .positive('forms.products.create.details.validation.price.type')
        .required('forms.products.create.details.validation.price.required'),
      // t('forms.products.create.details.validation.description.min')
      // t('forms.products.create.details.validation.description.required')
      description: yup
        .string()
        .min(10, 'forms.products.create.details.validation.description.min')
        .required(
          'forms.products.create.details.validation.description.required'
        ),
    }),
  },
  {
    // t('forms.products.create.images.title')
    stepLabel: 'forms.products.create.images.title',
    content: <FormBuilder items={PRODUCT_IMAGES} />,
    validationSchema: yup.object({
      // t('forms.products.create.images.validation.files.min')
      files: yup
        .array()
        .min(1, 'forms.products.create.images.validation.files.min')
        .of(
          yup.object({
            // t('forms.products.create.images.validation.files.unsupported')
            file: yup
              .mixed()
              .required()
              .test(
                'fileFormat',
                'forms.products.create.images.validation.files.unsupported',
                (value) => value && SUPPORTED_IMAGE_FORMATS.includes(value.type)
              ),
            // t('forms.products.create.images.validation.description.min')
            // t('forms.products.create.images.validation.description.required')
            description: yup
              .string()
              .min(
                10,
                'forms.products.create.images.validation.description.min'
              )
              .required(
                'forms.products.create.images.validation.description.required'
              ),
          })
        ),
    }),
  },
  {
    // t('forms.products.create.confirm.title')
    stepLabel: 'forms.products.create.confirm.title',
    content: <Confirmation />,
  },
];

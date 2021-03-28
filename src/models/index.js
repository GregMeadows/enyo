// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Image } = initSchema(schema);

export {
  Product,
  Image
};
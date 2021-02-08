import { DeepOmit } from '../utils/DeepOmit';
import { GetImageQuery, GetProductQuery } from './API';

export type Product = DeepOmit<
  Exclude<GetProductQuery['getProduct'], null>,
  '__typename'
>;

export type Image = DeepOmit<
  Exclude<GetImageQuery['getImage'], null>,
  '__typename'
>;

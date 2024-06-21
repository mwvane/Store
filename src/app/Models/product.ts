import { IDiscount } from './discount';

export interface IProduct {
  productId?: number;
  name: string;
  price: number;
  quantity: number;
  rating?: number;
  view?: number;
  images?: string[];
  discount?: IDiscount;
  isFavorite: boolean;
}

import { IDiscount } from './discount';

export interface IProduct {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  rating?: number;
  view?: number;
  images?: string[];
  discount?: IDiscount;
  isFavorite: boolean;
}

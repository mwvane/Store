import { ICategory } from './category';
import { IDiscount } from './discount';
import { IManufacturer } from './manufacturer';

export interface IProduct {
  productId?: number;
  name: string;
  price: number;
  quantity: number;
  category?: ICategory
  manufacturer?: IManufacturer;
  description?: string;
  rating?: number;
  ViewCount?: number;
  createDate?: Date
  images?: string[];
  discount?: IDiscount;
  isFavorite: boolean;
}

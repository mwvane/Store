export interface INavItem {
  id?: number;
  name: string;
  image?: string;
  subCategories?: INavItem[];
  parentCategoryId?: number;
  url?: string;
  isActive?: boolean;
  autoClose?: boolean;
}

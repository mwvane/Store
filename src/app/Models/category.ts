export interface ICategory {
  id?: number;
  name: string;
  image?: string;
  icon?: string;
  subCategories?: ICategory[];
  parentCategoryId? : number
}

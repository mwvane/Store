export interface ICategory {
  id?: number;
  name: string;
  image?: string;
  subCategories?: ICategory[];
  parentCategoryId? : number
  url?: string
}

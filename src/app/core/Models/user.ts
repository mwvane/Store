export interface IUser {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  image?: string;
  role: UserRole;
}
export enum UserRole {
  client,
  admin,
  manager,
}

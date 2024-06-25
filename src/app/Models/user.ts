export interface IUser {
  id: number;
  role: UserRole;
}
export enum UserRole {
  client,
  admin,
  manager,
}

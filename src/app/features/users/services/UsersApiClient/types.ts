import { User, UserAdress } from "../../../../types";

export interface UsersApiClientStructure {
  getUsers(): Promise<User[]>;
  addUser(newUser: UserAdress): Promise<User>;
  syncUsers(): Promise<User[]>;
}

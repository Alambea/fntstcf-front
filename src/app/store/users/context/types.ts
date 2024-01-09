import { User, UserAdress } from "../../../types";

export interface UsersContextStructure {
  users: User[];
  loadUsers: () => Promise<void>;
  addNewUser: (newUser: UserAdress) => Promise<void>;
}

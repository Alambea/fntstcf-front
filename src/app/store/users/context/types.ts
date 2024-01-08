import { User } from "../../../types";

export interface UsersContextStructure {
  users: User[];
  loadUsers: () => Promise<void>;
}

import { User } from "../../../../data/types";

export interface UsersApiClientStructure {
  getUsers(): Promise<User[]>;
}

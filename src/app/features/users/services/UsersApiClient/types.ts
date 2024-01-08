import { User } from "../../../../types";

export interface UsersApiClientStructure {
  getUsers(): Promise<User[]>;
}

import "dotenv/config";
import axios from "axios";
import { UsersApiClientStructure } from "./types";
import { User, UserAdress } from "../../../../types";

class UsersApiClient implements UsersApiClientStructure {
  constructor() {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  }

  async getUsers(): Promise<User[]> {
    const {
      data: { users },
    } = await axios.get<{ users: User[] }>("/users");

    return users;
  }

  async addUser(newUser: UserAdress): Promise<User> {
    const {
      data: { user },
    } = await axios.put<{ user: User }>("/users", newUser);

    return user;
  }
}

export default UsersApiClient;

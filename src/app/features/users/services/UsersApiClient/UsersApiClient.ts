import "dotenv/config";
import axios from "axios";
import { UsersApiClientStructure } from "./types";
import { User, UserAdress } from "../../../../types";
import { paths } from "../../../../routers/paths";

class UsersApiClient implements UsersApiClientStructure {
  constructor() {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  }

  async getUsers(): Promise<User[]> {
    const {
      data: { users },
    } = await axios.get<{ users: User[] }>(paths.users);

    return users;
  }

  async addUser(newUser: UserAdress): Promise<User> {
    const {
      data: { user },
    } = await axios.put<{ user: User }>(paths.users, newUser);

    return user;
  }

  async syncUsers(): Promise<User[]> {
    const {
      data: { users },
    } = await axios.post<{ users: User[] }>(paths.sync);

    return users;
  }
}

export default UsersApiClient;

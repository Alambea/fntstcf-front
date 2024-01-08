import "dotenv/config";
import axios from "axios";
import { UsersApiClientStructure } from "./types";
import { User } from "../../../../types";

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
}

export default UsersApiClient;

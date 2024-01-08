import { createContext } from "react";
import { UsersContextStructure } from "./types";

const UsersContext = createContext<UsersContextStructure>(
  {} as UsersContextStructure,
);

export default UsersContext;

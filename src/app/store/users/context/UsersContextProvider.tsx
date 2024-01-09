"use client";

import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useUsers from "../../../features/users/hooks/useUsers/useUsers";
import { User, UserAdress } from "../../../types";
import UsersContext from "./UsersContext";
import { UsersContextStructure } from "./types";

const UsersContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [users, setUsers] = useState<User[]>([]);
  const { getUsers, addUser } = useUsers();

  const loadUsers = useCallback(async () => {
    const apiUsers = await getUsers();

    if (apiUsers) {
      setUsers([...apiUsers]);
    }
  }, [getUsers]);

  const addNewUser = useCallback(
    async (newUser: UserAdress) => {
      const apiUser = await addUser(newUser);

      if (apiUser) {
        setUsers([...users, apiUser]);
      }
    },
    [addUser, users],
  );

  const usersContextValue = useMemo(
    (): UsersContextStructure => ({
      users,
      loadUsers,
      addNewUser,
    }),
    [loadUsers, users, addNewUser],
  );

  return (
    <UsersContext.Provider value={usersContextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;

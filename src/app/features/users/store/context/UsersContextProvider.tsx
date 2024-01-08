"use client";

import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useUsers from "../../hooks/useUsers/useUsers";
import { User } from "../../types";
import UsersContext from "./UsersContext";
import { UsersContextStructure } from "./types";

const UsersContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [users, setUsers] = useState<User[]>([]);
  const { getUsers } = useUsers();

  const loadUsers = useCallback(async () => {
    const apiUsers = await getUsers();
    setUsers([...apiUsers]);
  }, [getUsers]);

  const usersContextValue = useMemo(
    (): UsersContextStructure => ({
      users,
      loadUsers,
    }),
    [loadUsers, users],
  );

  return (
    <UsersContext.Provider value={usersContextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;

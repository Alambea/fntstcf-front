"use client";

import { useContext, useEffect } from "react";
import UsersTable from "../components/UsersTable/UsersTable";
import UsersContext from "../store/users/context/UsersContext";
import "./UsersPage.scss";

const UsersPage = (): React.ReactElement => {
  const { loadUsers, users } = useContext(UsersContext);

  useEffect(() => {
    (async () => {
      await loadUsers();
    })();
  }, [loadUsers]);

  return (
    <main className="users-content">
      <h1 className="users-content__title">Users control</h1>
      {users.length > 0 && <UsersTable />}
    </main>
  );
};

export default UsersPage;

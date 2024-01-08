"use client";

import { useContext, useEffect } from "react";
import UsersTable from "../components/UsersTable/UsersTable";
import UsersContext from "../features/users/store/context/UsersContext";
import "./UsersPage.scss";

const UsersPage = (): React.ReactElement => {
  const { loadUsers } = useContext(UsersContext);

  useEffect(() => {
    (async () => {
      await loadUsers();
    })();
  }, [loadUsers]);

  return (
    <main className="users-content">
      <h1 className="users-content__title">Users control</h1>
      <UsersTable />
    </main>
  );
};

export default UsersPage;

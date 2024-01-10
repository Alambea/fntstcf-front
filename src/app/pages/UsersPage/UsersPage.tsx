"use client";

import { Suspense, useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/loading";
import UsersTable from "../../components/UsersTable/UsersTable";
import UsersContext from "../../store/users/context/UsersContext";
import "./UsersPage.scss";
import useUsers from "../../features/users/hooks/useUsers/useUsers";
import { toast } from "react-toastify";

const UsersPage = (): React.ReactElement => {
  const { loadUsers, users } = useContext(UsersContext);
  const { syncUsers } = useUsers();

  useEffect(() => {
    (async () => {
      await loadUsers();
    })();
  }, [loadUsers]);

  const handleSync = async () => {
    try {
      await syncUsers();
      await loadUsers();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="users-content">
      <h1 className="users-content__title">Users control</h1>
      <Suspense fallback={<Loading />}>
        <Button className="outlined" actionOnClick={handleSync}>
          Sync
        </Button>
      </Suspense>
      {users.length > 0 ? <UsersTable /> : <Loading />}
    </main>
  );
};

export default UsersPage;

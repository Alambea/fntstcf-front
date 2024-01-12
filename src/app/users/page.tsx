"use client";

import { Suspense, useContext, useEffect } from "react";
import Loading from "../components/Loading/loading";
import Button from "../components/Button/Button";
import UsersTable from "../components/UsersTable/UsersTable";
import { toast } from "react-toastify";
import useUsers from "../features/users/hooks/useUsers/useUsers";
import UiContext from "../store/ui/context/UiContext";
import UsersContext from "../store/users/context/UsersContext";
import "./UsersPage.scss";

const UsersPage = (): React.ReactElement => {
  const { loadUsers } = useContext(UsersContext);
  const { isLoading } = useContext(UiContext);
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
    } catch (error: unknown) {
      toast.error((error as Error).message);
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
      {!isLoading && <UsersTable />}
      {isLoading && <Loading />}
    </main>
  );
};

export default UsersPage;

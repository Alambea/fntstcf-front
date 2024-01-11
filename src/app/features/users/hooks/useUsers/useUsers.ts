import { useCallback, useContext, useMemo } from "react";
import { toast } from "react-toastify";
import UiContext from "../../../../store/ui/context/UiContext";
import { UserAdress } from "../../../../types";
import UsersApiClient from "../../services/UsersApiClient/UsersApiClient";

const useUsers = () => {
  const studentsApiClient = useMemo(() => new UsersApiClient(), []);
  const { showLoading, hideLoading } = useContext(UiContext);

  const getUsers = useCallback(async () => {
    showLoading();

    try {
      const users = await studentsApiClient.getUsers();

      hideLoading();

      return users;
    } catch (error) {
      hideLoading();
      toast.error("Failed to load users");
    }
  }, [studentsApiClient, showLoading, hideLoading]);

  const addUser = useCallback(
    async (newUser: UserAdress) => {
      try {
        const user = await studentsApiClient.addUser(newUser);

        toast.success("User successfully added");

        return user;
      } catch (error) {
        toast.error("Failed to add user");
      }
    },
    [studentsApiClient],
  );

  const syncUsers = useCallback(async () => {
    try {
      await studentsApiClient.syncUsers();

      toast.success("Users successfully synchronized");
    } catch (error) {
      throw new Error("Failed to synchronize users");
    }
  }, [studentsApiClient]);

  return { getUsers, addUser, syncUsers };
};

export default useUsers;

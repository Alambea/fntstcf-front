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
      showLoading();

      try {
        const user = await studentsApiClient.addUser(newUser);

        toast.success("User successfully added");

        hideLoading();

        return user;
      } catch (error) {
        hideLoading();
        toast.error("Failed to add user");
      }
    },
    [studentsApiClient, showLoading, hideLoading],
  );

  const syncUsers = useCallback(async () => {
    showLoading();

    try {
      await studentsApiClient.syncUsers();

      hideLoading();

      toast.success("Users successfully synchronized");
    } catch (error) {
      hideLoading();
      throw new Error("Failed to synchronize users");
    }
  }, [studentsApiClient, showLoading, hideLoading]);

  return { getUsers, addUser, syncUsers };
};

export default useUsers;

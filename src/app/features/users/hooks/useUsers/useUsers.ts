import { useCallback, useMemo } from "react";
import UsersApiClient from "../../services/UsersApiClient/UsersApiClient";
import { toast } from "react-toastify";
import { UserAdress } from "../../../../types";

const useUsers = () => {
  const studentsApiClient = useMemo(() => new UsersApiClient(), []);

  const getUsers = useCallback(async () => {
    try {
      const users = await studentsApiClient.getUsers();

      return users;
    } catch {
      toast.error("Failed to load users");
    }
  }, [studentsApiClient]);

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
      const users = await studentsApiClient.syncUsers();

      toast.success("Users successfully synchronized");

      return users;
    } catch (error) {
      toast.error("Failed to synchronize users");
    }
  }, [studentsApiClient]);

  return { getUsers, addUser, syncUsers };
};

export default useUsers;

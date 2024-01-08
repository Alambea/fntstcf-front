import { useCallback, useMemo } from "react";
import UsersApiClient from "../../services/UsersApiClient/UsersApiClient";

const useUsers = () => {
  const studentsApiClient = useMemo(() => new UsersApiClient(), []);

  const getUsers = useCallback(async () => {
    try {
      const users = await studentsApiClient.getUsers();

      return users;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }, [studentsApiClient]);

  return { getUsers };
};

export default useUsers;

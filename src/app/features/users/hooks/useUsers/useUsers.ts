import { useCallback, useMemo } from "react";
import UsersApiClient from "../../services/UsersApiClient/UsersApiClient";
import { toast } from "react-toastify";

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

  return { getUsers };
};

export default useUsers;

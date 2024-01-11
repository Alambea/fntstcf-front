"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import Loading from "../../components/Loading/loading";
import UserForm from "../../components/UserForm/UserForm";
import { paths } from "../../routers/paths";
import UiContext from "../../store/ui/context/UiContext";
import UsersContext from "../../store/users/context/UsersContext";
import { UserAdress } from "../../types";
import "./AddUserPage.scss";

const AddUserPage = (): React.ReactElement => {
  const { isLoading } = useContext(UiContext);
  const { addNewUser } = useContext(UsersContext);

  const router = useRouter();

  const actionOnSubmit = async (newUser: UserAdress) => {
    await addNewUser(newUser);

    router.push(paths.users);
    scrollTo(0, 0);
  };

  return (
    <main className="add-user-content">
      <h1 className="add-user-content__title">Add a new user</h1>
      <UserForm actionOnSubmit={actionOnSubmit} />
      {isLoading && <Loading />}
    </main>
  );
};

export default AddUserPage;

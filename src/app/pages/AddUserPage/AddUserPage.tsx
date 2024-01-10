"use client";

import { useContext } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { UserAdress } from "../../types";
import UsersContext from "../../store/users/context/UsersContext";
import { paths } from "../../routers/paths";
import { useRouter } from "next/navigation";
import "./AddUserPage.scss";

const AddUserPage = (): React.ReactElement => {
  const router = useRouter();
  const { addNewUser } = useContext(UsersContext);

  const actionOnSubmit = async (newUser: UserAdress) => {
    await addNewUser(newUser);

    router.push(paths.users);
    scrollTo(0, 0);
  };

  return (
    <main className="add-user-content">
      <h1 className="add-user-content__title">Add a new user</h1>
      <UserForm actionOnSubmit={actionOnSubmit} />
    </main>
  );
};

export default AddUserPage;

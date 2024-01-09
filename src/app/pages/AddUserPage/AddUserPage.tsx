import UserForm from "../../components/UserForm/UserForm";
import "./AddUserPage.scss";

const AddUserPage = (): React.ReactElement => {
  return (
    <main className="add-user-content">
      <h1 className="add-user-content__title">Add a new user</h1>
      <UserForm />
    </main>
  );
};

export default AddUserPage;

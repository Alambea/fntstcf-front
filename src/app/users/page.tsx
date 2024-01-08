import UsersTable from "../components/UsersTable/UsersTable";
import "./UsersPage.scss";

const UsersPage = (): React.ReactElement => {
  return (
    <main className="users-content">
      <h1 className="users-content__title">Users control</h1>
      <UsersTable />
    </main>
  );
};

export default UsersPage;

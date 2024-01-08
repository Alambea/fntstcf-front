import { Kumar_One_Outline as KumarOneOutlined } from "next/font/google";
import { useContext } from "react";
import UsersContext from "../../store/users/context/UsersContext";
import "./UsersTable.scss";

const bungee = KumarOneOutlined({ subsets: ["latin"], weight: ["400"] });

const UsersTable = (): React.ReactElement => {
  const { users } = useContext(UsersContext);

  return (
    <table className="users-table">
      <caption className="users-table__title">Users control data </caption>
      <thead className="users-table__head">
        <tr className="users-table__row">
          <th>Nº</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody className="users-table__body">
        {users.map((user, userPosition) => (
          <tr key={user._id} className="users-table__row">
            <td className={`users-table__number ${bungee.className}`}>
              {userPosition + 1}
            </td>
            <td className="users-table__name">{user.name}</td>
            <td className="users-table__other">{user.email}</td>
            <td className="users-table__other">{user.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;

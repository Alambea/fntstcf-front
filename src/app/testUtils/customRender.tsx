import { render } from "@testing-library/react";
import { vi } from "vitest";
import { usersMock } from "../mocks/usersMock";
import UsersContext from "../store/users/context/UsersContext";

export const customRender = (children: React.ReactElement): void => {
  const loadUsers = vi.fn();
  const users = usersMock;

  render(
    <UsersContext.Provider value={{ loadUsers, users }}>
      {children}
    </UsersContext.Provider>,
  );
};

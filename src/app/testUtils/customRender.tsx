import { render } from "@testing-library/react";
import UsersContext from "../features/users/store/context/UsersContext";
import { vi } from "vitest";
import { usersMock } from "../mocks/usersMock";

export const customRender = (children: React.ReactElement): void => {
  const loadUsers = vi.fn();
  const users = usersMock;

  render(
    <UsersContext.Provider value={{ loadUsers, users }}>
      {children}
    </UsersContext.Provider>,
  );
};

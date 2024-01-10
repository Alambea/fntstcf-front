import { render } from "@testing-library/react";
import { vi } from "vitest";
import { usersMock } from "../mocks/usersMock";
import UsersContext from "../store/users/context/UsersContext";
import {
  AppRouterContext,
  AppRouterInstance,
} from "next/dist/shared/lib/app-router-context.shared-runtime";

export const customRender = (children: React.ReactElement): void => {
  const router: Partial<AppRouterInstance> = {
    refresh: vi.fn(),
    prefetch: vi.fn(),
  };

  const loadUsers = vi.fn();
  const addNewUser = vi.fn();
  const users = usersMock;

  render(
    <AppRouterContext.Provider value={router as AppRouterInstance}>
      <UsersContext.Provider value={{ loadUsers, users, addNewUser }}>
        {children}
      </UsersContext.Provider>
    </AppRouterContext.Provider>,
  );
};

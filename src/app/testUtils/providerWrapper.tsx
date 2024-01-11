import {
  AppRouterContext,
  AppRouterInstance,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import { PropsWithChildren } from "react";
import { vi } from "vitest";
import { usersMock } from "../mocks/usersMock";
import UiContextProvider from "../store/ui/context/UiContextProvider";
import UsersContext from "../store/users/context/UsersContext";

export const wrapper = ({ children }: PropsWithChildren) => {
  const router: Partial<AppRouterInstance> = { refresh: vi.fn() };
  const users = usersMock;
  const loadUsers = vi.fn();
  const addNewUser = vi.fn();

  return (
    <AppRouterContext.Provider value={router as AppRouterInstance}>
      <UiContextProvider>
        <UsersContext.Provider value={{ loadUsers, addNewUser, users }}>
          {children}
        </UsersContext.Provider>
      </UiContextProvider>
    </AppRouterContext.Provider>
  );
};

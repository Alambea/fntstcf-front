import { renderHook } from "@testing-library/react";
import { usersMock } from "../../../../../mocks/usersMock";
import useUsers from "../useUsers";
import { vitest } from "vitest";
import { server } from "../../../../../mocks/node";
import { errorHandlers } from "../../../../../mocks/handlers";
import { toast } from "react-toastify";

describe("Given an syncUsers function", () => {
  describe("When it's called succesfully", () => {
    test(`Then it should return a list of users '${usersMock[0].name}', '${usersMock[1].name}' when resolving successfully`, async () => {
      const expectedUsers = usersMock;

      const {
        result: {
          current: { syncUsers },
        },
      } = renderHook(() => useUsers());

      const users = await syncUsers();

      expect(users).toStrictEqual(expectedUsers);
    });
  });

  describe("When it is called and an error is thrown", () => {
    test("Then it should call the function showFeedback with 'Failed to synchronize users'  and 'error'", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedErrorMessage = "Failed to synchronize users";
      const toastType = "error";

      const spyShowFeedback = vitest.spyOn(toast, toastType);

      const {
        result: {
          current: { syncUsers },
        },
      } = renderHook(() => useUsers());

      await syncUsers();

      expect(spyShowFeedback).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});

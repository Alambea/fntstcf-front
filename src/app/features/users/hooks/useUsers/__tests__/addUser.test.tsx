import { renderHook } from "@testing-library/react";
import { leanneMock } from "../../../../../mocks/usersMock";
import useUsers from "../useUsers";
import { vitest } from "vitest";
import { server } from "../../../../../mocks/node";
import { errorHandlers } from "../../../../../mocks/handlers";
import { toast } from "react-toastify";

describe("Given an addUser function", () => {
  const newUser = leanneMock;

  describe(`When it's called with a new user '${leanneMock.name}' succesfully`, () => {
    test(`Then it should return the user '${leanneMock.name}'`, async () => {
      const expectedUser = leanneMock;

      const {
        result: {
          current: { addUser },
        },
      } = renderHook(() => useUsers());

      const user = await addUser(newUser);

      expect(user).toStrictEqual(expectedUser);
    });
  });

  describe("When it is called and an error is thrown", () => {
    test("Then it should call the function showFeedback with 'Failed to add user' and 'error'", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedErrorMessage = "Failed to add user";
      const toastType = "error";

      const spyShowFeedback = vitest.spyOn(toast, toastType);

      const {
        result: {
          current: { addUser },
        },
      } = renderHook(() => useUsers());

      await addUser(newUser);

      expect(spyShowFeedback).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});

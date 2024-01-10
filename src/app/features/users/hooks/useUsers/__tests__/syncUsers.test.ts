import { renderHook } from "@testing-library/react";
import useUsers from "../useUsers";
import { vitest } from "vitest";
import { server } from "../../../../../mocks/node";
import { errorHandlers } from "../../../../../mocks/handlers";
import { toast } from "react-toastify";

describe("Given an syncUsers function", () => {
  describe("When it's called succesfully", () => {
    test(`Then it should call the function showFeedback with 'Users successfully synchronized'  and 'success'`, async () => {
      const expectedErrorMessage = "Users successfully synchronized";
      const toastType = "success";

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

  describe("When it is called and an error is thrown", () => {
    test("Then it should throw an error ''", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedError = "Failed to synchronize users";

      const {
        result: {
          current: { syncUsers },
        },
      } = renderHook(() => useUsers());

      const promise = syncUsers();

      expect(promise).rejects.toThrow(expectedError);
    });
  });
});

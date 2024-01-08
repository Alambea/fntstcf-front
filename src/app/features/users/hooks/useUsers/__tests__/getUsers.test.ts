import { renderHook } from "@testing-library/react";
import { usersMock } from "../../../../../mocks/usersMock";
import useUsers from "../useUsers";

describe("Given an getUsers function", () => {
  describe("When it's called", () => {
    test(`Then it should return a list of users '${usersMock[0].name}', '${usersMock[1].name}' when resolving successfully`, async () => {
      const expectedUsers = usersMock;

      const {
        result: {
          current: { getUsers },
        },
      } = renderHook(() => useUsers());

      const users = await getUsers();

      expect(users).toStrictEqual(expectedUsers);
    });
  });
});

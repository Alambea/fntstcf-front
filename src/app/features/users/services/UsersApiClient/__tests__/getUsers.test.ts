import { usersMock } from "../../../../../mocks/usersMock";
import UsersApiClient from "../UsersApiClient";

describe("Given a UsersApiClient's method getUsers", () => {
  describe("When it is called succesfully", () => {
    test(`Then it should return a list of users '${usersMock[0].name}' and '${usersMock[1].name}'`, async () => {
      const expectedUsers = usersMock;
      const userApiClient = new UsersApiClient();

      const users = await userApiClient.getUsers();

      expect(users).toStrictEqual(expectedUsers);
    });
  });
});

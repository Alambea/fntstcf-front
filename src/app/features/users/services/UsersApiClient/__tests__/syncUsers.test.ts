import UsersApiClient from "../UsersApiClient";

describe("Given a UsersApiClient's method syncUsers", () => {
  describe("When it is called succesfully", () => {
    test(`Then it should resolve the returned promise`, async () => {
      const userApiClient = new UsersApiClient();

      const promise = userApiClient.syncUsers();

      expect(promise).resolves;
    });
  });
});

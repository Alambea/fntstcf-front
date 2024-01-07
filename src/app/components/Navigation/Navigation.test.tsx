import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show two links with the text 'Users' and 'Add User'", () => {
      const expectedUsersText = /users/i;
      const expectedAddText = /add user/i;

      render(<Navigation />);

      const usersLink = screen.getByRole("link", {
        name: expectedUsersText,
      });
      const addLink = screen.getByRole("link", { name: expectedAddText });

      expect(usersLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
    });
  });
});

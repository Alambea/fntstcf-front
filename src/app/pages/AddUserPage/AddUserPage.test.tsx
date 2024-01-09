import { screen } from "@testing-library/react";
import AddUserPage from "./AddUserPage";
import { customRender } from "../../testUtils/customRender";

describe("Given a Header component", () => {
  describe("When it's redered", () => {
    test("Then it should show a heading 'Users Control'", () => {
      const expectedHeading = /add a new user/i;

      customRender(<AddUserPage />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});

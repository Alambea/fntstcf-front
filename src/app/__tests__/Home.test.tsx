import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Given a Home component", () => {
  describe("When it's redered", () => {
    test("Then it should show a heading 'Users Control'", () => {
      const expectedHeading = /users control/i;

      render(<Home />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});

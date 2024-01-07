import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is redered", () => {
    test("Then it should show an image with an alternative text 'Fantasticfy logo'", () => {
      const expectedAltText = "Fantasticfy logo";

      render(<Header />);

      const image = screen.getByAltText(expectedAltText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should have a link with an accesible name 'Fantasticfy logo'", () => {
      const expectedAltText = "Go to table of users";

      render(<Header />);

      const link = screen.getByRole("link", { name: expectedAltText });

      expect(link).toBeInTheDocument();
    });

    test("Then it should show a heading 'Userfy'", () => {
      const expectedHeading = "Userfy";

      render(<Header />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { NextFont } from "next/dist/compiled/@next/font";
import { vi } from "vitest";
import RootLayout from "../layout";
import Home from "../page";

vi.mock("next/font/google", () => ({
  Oswald: vi.fn().mockReturnValue({} as NextFont),
}));

vi.mock("next/navigation", () => {
  const actual = vi.importActual("next/navigation");
  const pathname = "/add-user";
  return {
    ...actual,
    usePathname: vi.fn().mockReturnValue(pathname),
  };
});

describe("Given a RootLayout component", () => {
  describe("When it is redered", () => {
    test("Then it should show a heading 'Userfy'", () => {
      const expectedHeading = "Userfy";

      render(<RootLayout />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's redered in the path '/users'", () => {
    test("Then it should show a heading 'Users control'", async () => {
      const expectedHeading = /users control/i;
      const usersLinkText = "Users";

      render(
        <RootLayout>
          <Home />
        </RootLayout>,
      );

      const usersLink = screen.getByRole("link", {
        name: usersLinkText,
      });

      await userEvent.click(usersLink);

      const heading = await screen.findByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});

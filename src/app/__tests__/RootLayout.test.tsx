import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { NextFont } from "next/dist/compiled/@next/font";
import { vi } from "vitest";
import RootLayout from "../layout";
import UsersRouter from "../users/page";
import AddUserRouter from "../add-user/page";

vi.mock("next/font/google", () => ({
  Oswald: vi.fn().mockReturnValue({} as NextFont),
  Kumar_One_Outline: vi.fn().mockReturnValue({} as NextFont),
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
    test("Then it should show a text 'Userfy'", () => {
      const expectedBrand = "Userfy";

      render(<RootLayout />);

      const brandText = screen.getByText(expectedBrand);

      expect(brandText).toBeInTheDocument();
    });
  });

  describe("When it's redered in the path '/users'", () => {
    test("Then it should show a heading 'Users control'", async () => {
      const expectedHeading = /users control/i;
      const usersLinkText = "Users";

      render(
        <RootLayout>
          <UsersRouter />
        </RootLayout>,
      );

      const usersLink = screen.getByRole("link", {
        name: usersLinkText,
      });

      await userEvent.click(usersLink);

      const heading = await screen.findByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's redered in the path '/add-users'", () => {
    test("Then it should show a heading 'Add new user'", async () => {
      const expectedHeading = /add a new user/i;
      const usersLinkText = /add user/i;

      render(
        <RootLayout>
          <AddUserRouter />
        </RootLayout>,
      );

      const usersLink = screen.getByRole("link", {
        name: usersLinkText,
      });

      await userEvent.click(usersLink);

      const heading = await screen.findByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});

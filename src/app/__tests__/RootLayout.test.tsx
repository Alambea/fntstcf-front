import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { NextFont } from "next/dist/compiled/@next/font";
import { vi } from "vitest";
import RootLayout from "../layout";
import UsersRouter from "../users/page";
import AddUserRouter from "../add-user/page";
import { NextRouter } from "next/router";
import { leanneMock } from "../mocks/usersMock";

vi.mock("next/font/google", () => ({
  Oswald: vi.fn().mockReturnValue({} as NextFont),
  Kumar_One_Outline: vi.fn().mockReturnValue({} as NextFont),
}));

vi.mock("next/navigation", async (importOriginal) => {
  const actual = (await importOriginal()) as NextRouter;
  const pathname = "/add-user";
  return {
    ...actual,
    usePathname: vi.fn().mockReturnValue(pathname),
    useRouter: vi
      .fn()
      .mockReturnValue({ push: vi.fn() } as Partial<NextRouter>),
  };
});

window.scrollTo = vi.fn().mockImplementation(() => {});

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

  describe("When it's redered in the path '/add-users' and the user fills teh form and clicks in the 'Add' button", () => {
    test("", async () => {
      const textButton = /add/i;

      const nameInputLabel = "Name";
      const usernameInputLabel = "Username";
      const emaileDateInputLabel = "Email";
      const addressInputLabel = "Address";

      const typedName = leanneMock.name;
      const typedUsername = leanneMock.username;
      const typedEmail = leanneMock.email;
      const typedAddress = leanneMock.address;

      render(
        <RootLayout>
          <AddUserRouter />
        </RootLayout>,
      );

      const nameInput = screen.getByLabelText(nameInputLabel);
      const usernameInput = screen.getByLabelText(usernameInputLabel);
      const emailInput = screen.getByLabelText(emaileDateInputLabel);
      const addressInput = screen.getByLabelText(addressInputLabel);

      await userEvent.type(nameInput, typedName);
      await userEvent.type(usernameInput, typedUsername);
      await userEvent.type(emailInput, typedEmail);
      await userEvent.type(addressInput, typedAddress);

      const button = screen.getByRole("button", { name: textButton });

      await userEvent.click(button);

      expect(button).toBeInTheDocument();
    });
  });
});

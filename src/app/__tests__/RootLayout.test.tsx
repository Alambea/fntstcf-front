import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { NextFont } from "next/dist/compiled/@next/font";
import { vi } from "vitest";
import RootLayout from "../layout";
import UsersPage from "../users/page";
import AddUserPage from "../add-user/page";
import { NextRouter } from "next/router";
import { leanneMock } from "../mocks/usersMock";
import { server } from "../mocks/node";
import { errorHandlers } from "../mocks/handlers";

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
          <UsersPage />
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

  describe("When it's redered in the path '/users', the user clicks on the 'Sync' button successfully", () => {
    test("Then it should show a text 'Users successfully synchronized'", async () => {
      const expectedFeedbackText = /users successfully synchronized/i;
      const buttonText = /sync/i;

      render(
        <RootLayout>
          <UsersPage />
        </RootLayout>,
      );

      const syncButton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(syncButton);

      const feedbackText = await screen.findByText(expectedFeedbackText);

      expect(feedbackText).toBeInTheDocument();
    });
  });

  describe("When it's redered in the path '/users', the user clicks on the 'Sync' button and there's an error", () => {
    test("Then it should show a text 'Failed to synchronize users'", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedFeedbackText = /failed to synchronize users/i;
      const buttonText = /sync/i;

      render(
        <RootLayout>
          <UsersPage />
        </RootLayout>,
      );

      const syncButton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(syncButton);

      const feedbackText = await screen.findByText(expectedFeedbackText);

      expect(feedbackText).toBeInTheDocument();
    });
  });

  describe("When it's redered in the path '/add-users'", () => {
    test("Then it should show a heading 'Add new user'", async () => {
      const expectedHeading = /add a new user/i;
      const usersLinkText = /add user/i;

      render(
        <RootLayout>
          <AddUserPage />
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
          <AddUserPage />
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

import { screen } from "@testing-library/react";
import UsersRouter from "../../users/page";
import { vi } from "vitest";
import { NextFont } from "next/dist/compiled/@next/font";
import { customRender } from "../../testUtils/customRender";
import UsersPage from "./UsersPage";
import userEvent from "@testing-library/user-event";

import { usersMock } from "../../mocks/usersMock";

vi.mock("next/font/google", () => ({
  Kumar_One_Outline: vi.fn().mockReturnValue({} as NextFont),
}));

describe("Given a Header component", () => {
  describe("When it's redered", () => {
    test("Then it should show a heading 'Users Control'", () => {
      const expectedHeading = /users control/i;

      customRender(<UsersRouter />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a button 'Sync'", () => {
      const expectedButtonText = /sync/i;

      customRender(<UsersRouter />);

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });

    describe("When it's redered in the path '/users' and the user clicks on the 'sync' button", () => {
      test("Then it should show a button 'Sync'", async () => {
        const buttonText = /sync/i;
        const expectedText = usersMock[1].name;

        customRender(<UsersPage />);

        const syncButton = screen.getByRole("button", {
          name: buttonText,
        });

        await userEvent.click(syncButton);

        const heading = await screen.findByText(expectedText);

        expect(heading).toBeInTheDocument();
      });
    });
  });
});

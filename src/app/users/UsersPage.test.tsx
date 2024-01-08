import { screen } from "@testing-library/react";
import UsersPage from "./page";
import { vi } from "vitest";
import { NextFont } from "next/dist/compiled/@next/font";
import { customRender } from "../testUtils/customRender";

vi.mock("next/font/google", () => ({
  Kumar_One_Outline: vi.fn().mockReturnValue({} as NextFont),
}));

describe("Given a Header component", () => {
  describe("When it's redered", () => {
    test("Then it should show a heading 'Users Control'", () => {
      const expectedHeading = /users control/i;

      customRender(<UsersPage />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});

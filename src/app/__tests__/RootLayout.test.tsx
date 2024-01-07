import { render, screen } from "@testing-library/react";
import RootLayout from "../layout";
import { vi } from "vitest";
import { NextFont } from "next/dist/compiled/@next/font";

vi.mock("next/font/google", () => ({
  Oswald: vi.fn().mockReturnValue({} as NextFont),
}));

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
});

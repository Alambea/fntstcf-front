import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { vi } from "vitest";

vi.mock("next/navigation", () => {
  const actual = vi.importActual("next/navigation");
  const pathname = "/users";
  return {
    ...actual,
    usePathname: vi.fn().mockReturnValue(pathname),
  };
});

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show two links with the text 'Users' and 'Add User'", () => {
      const expectedUsersText = /users/i;
      const expectedAddText = /add user/i;

      render(<Navigation />);

      const usersLink = screen.getByRole("link", {
        name: expectedUsersText,
      });
      const addLink = screen.getByRole("link", { name: expectedAddText });

      expect(usersLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
    });
  });
});

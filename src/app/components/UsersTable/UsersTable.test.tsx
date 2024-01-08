import { screen } from "@testing-library/react";
import { NextFont } from "next/dist/compiled/@next/font";
import { vi } from "vitest";
import { usersMock } from "../../mocks/usersMock";
import { customRender } from "../../testUtils/customRender";
import UsersTable from "./UsersTable";

vi.mock("next/font/google", () => ({
  Kumar_One_Outline: vi.fn().mockReturnValue({} as NextFont),
}));

describe("Given a UserTable component", () => {
  describe("When it's redered", () => {
    test("Then it should show column headeres with the texts 'Nº', 'Name', 'Email', 'Username'", () => {
      const expectedColumnHeaders = ["Nº", "Name", "Email", "Username"];

      customRender(<UsersTable />);

      expectedColumnHeaders.forEach((expectedColumnHeader) => {
        const columnHeader = screen.getByRole("columnheader", {
          name: expectedColumnHeader,
        });

        expect(columnHeader).toBeInTheDocument();
      });
    });

    test(`Then it should show the user ${usersMock[0].name} information '${usersMock[0].name}', '${usersMock[0].email}', '${usersMock[0].username}'`, () => {
      const usersData = usersMock[0];
      const expectedName = usersData.name;
      const expectedEmail = usersData.email;
      const expectedUsername = usersData.username;

      customRender(<UsersTable />);

      const nameCell = screen.getByText(expectedName);
      const emailCell = screen.getByText(expectedEmail);
      const usernameCell = screen.getByText(expectedUsername);

      expect(nameCell).toBeInTheDocument();
      expect(emailCell).toBeInTheDocument();
      expect(usernameCell).toBeInTheDocument();
    });
  });
});

import UserForm from "./UserForm";
import { render, screen } from "@testing-library/react";

describe("Given a NewRecordForm component", () => {
  const nameInputLabel = "Name";
  const usernameInputLabel = "Username";
  const emaileDateInputLabel = "Email";
  const addressInputLabel = "Address";

  describe("When it's rendered", () => {
    test("Then it should show an 'Name', 'Username', 'Email', 'Address' labels", async () => {
      render(<UserForm />);

      const nameInput = screen.getByLabelText(nameInputLabel);
      const usernameInput = screen.getByLabelText(usernameInputLabel);
      const emailInput = screen.getByLabelText(emaileDateInputLabel);
      const addressInput = screen.getByLabelText(addressInputLabel);

      expect(nameInput).toBeInTheDocument();
      expect(usernameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(addressInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Add'", async () => {
      const expectedButtonText = "Add";

      render(<UserForm />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});

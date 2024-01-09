import userEvent from "@testing-library/user-event";
import { leanneMock } from "../../mocks/usersMock";
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

  describe(`When the user types '${leanneMock.name}', '${leanneMock.username}', '${leanneMock.email}', '${leanneMock.address}', `, () => {
    test("Then the inputs should show the typed value", async () => {
      const typedName = leanneMock.name;
      const typedUsername = leanneMock.username;
      const typedEmail = leanneMock.email;
      const typedAddress = leanneMock.address;

      render(<UserForm />);

      const nameInput = screen.getByLabelText(nameInputLabel);
      const usernameInput = screen.getByLabelText(usernameInputLabel);
      const emailInput = screen.getByLabelText(emaileDateInputLabel);
      const addressInput = screen.getByLabelText(addressInputLabel);

      await userEvent.type(nameInput, typedName);
      await userEvent.type(usernameInput, typedUsername);
      await userEvent.type(emailInput, typedEmail);
      await userEvent.type(addressInput, typedAddress);

      expect(nameInput).toHaveValue(typedName);
      expect(usernameInput).toHaveValue(typedUsername);
      expect(emailInput).toHaveValue(typedEmail);
      expect(addressInput).toHaveValue(typedAddress);
    });
  });
});

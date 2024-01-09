import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { vi } from "vitest";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a text 'Click here'", () => {
      const mockFunction = vi.fn();
      const buttonText = "Click here";

      render(
        <Button className="" actionOnClick={mockFunction}>
          {buttonText}
        </Button>,
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });

    test("Then the received function should be called on clicking", async () => {
      const mockFunction = vi.fn();
      const buttonText = "Add";

      render(
        <Button className="" actionOnClick={mockFunction}>
          {buttonText}
        </Button>,
      );

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});

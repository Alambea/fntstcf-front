import { render, screen } from "@testing-library/react";
import { wrapper } from "../testUtils/providerWrapper";
import React from "react";
import { vi } from "vitest";
import UiContext from "../store/ui/context/UiContext";
import AddUserPage from "./page";

describe("Given a Header component", () => {
  describe("When it's redered", () => {
    test("Then it should show a heading 'Users Control'", () => {
      const expectedHeading = /add a new user/i;

      render(<AddUserPage />, { wrapper });

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's redered and the page is loading", () => {
    test("Then it should show a loader'", async () => {
      const expectAriaLabelText = "loading";

      const showLoading = vi.fn();
      const hideLoading = vi.fn();
      const isLoading = true;

      render(
        <UiContext.Provider value={{ isLoading, hideLoading, showLoading }}>
          <AddUserPage />
        </UiContext.Provider>,
        { wrapper },
      );

      const loading = await screen.findByLabelText(expectAriaLabelText);

      expect(loading).toBeInTheDocument();
    });
  });
});

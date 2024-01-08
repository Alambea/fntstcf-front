// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { handlers } from "./app/mocks/handlers";
import { server } from "./app/mocks/node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers(...handlers));
afterAll(() => server.close());

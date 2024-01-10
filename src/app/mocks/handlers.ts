import "dotenv/config";
import { HttpHandler, HttpResponse, http } from "msw";
import { paths } from "../routers/paths";
import { leanneMock, usersMock } from "./usersMock";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const handlers: HttpHandler[] = [
  http.get(`${apiUrl}${paths.users}`, () =>
    HttpResponse.json({ users: usersMock }),
  ),
  http.put(`${apiUrl}${paths.users}`, () =>
    HttpResponse.json({ user: leanneMock }),
  ),
  http.post(`${apiUrl}${paths.sync}`, () =>
    HttpResponse.json({ users: usersMock }),
  ),
];

export const errorHandlers: HttpHandler[] = [
  http.get(`${apiUrl}${paths.users}`, () => HttpResponse.error()),
  http.put(`${apiUrl}${paths.users}`, () => HttpResponse.error()),
  http.post(`${apiUrl}${paths.sync}`, () => HttpResponse.error()),
];

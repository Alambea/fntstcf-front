import "dotenv/config";
import { HttpHandler, HttpResponse, http } from "msw";
import { paths } from "../routers/paths";
import { usersMock } from "./usersMock";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const handlers: HttpHandler[] = [
  http.get(`${apiUrl}${paths.users}`, () =>
    HttpResponse.json({ users: usersMock }),
  ),
];

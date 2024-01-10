import { User, UserAdress } from "../types";

export const usersMock: User[] = [
  {
    _id: "659730dc918836cd309acda2",
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    _id: "6597311f918836cd309acda5",
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
];

export const leanneMock: UserAdress = {
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: "Address example",
};

export const syncUsersMock: User[] = [
  ...usersMock,
  {
    _id: "7587311f918836cd309ff5t6",
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott",
  },
];

export interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
}

export interface UserAdress extends Omit<User, "_id"> {
  address: string;
}

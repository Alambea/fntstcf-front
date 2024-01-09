"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { UserAdress } from "../../types";
import "./UserForm.scss";

const UserForm = (): React.ReactElement => {
  const [isDisabled, setIsDisabled] = useState(false);

  const initialUser: UserAdress = {
    name: "",
    username: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState<UserAdress>(initialUser);

  const updateUser = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setUser((user) => ({
      ...user,
      [event.target.id]: event.target.value,
    }));
  };

  useEffect(() => {
    setIsDisabled(
      Object.values(user).every((value) => {
        return Boolean(value);
      }),
    );
  }, [user]);

  return (
    <form className="user-form">
      <div className="user-form__group">
        <label htmlFor="name" className="user-form__label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="user-form__input"
          value={user.name}
          onChange={updateUser}
          aria-required="true"
        />
      </div>
      <div className="user-form__group">
        <label htmlFor="username" className="user-form__label">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="user-form__input"
          value={user.username}
          onChange={updateUser}
          aria-required="true"
        />
      </div>
      <div className="user-form__group">
        <label htmlFor="email" className="user-form__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="user-form__input"
          value={user.email}
          onChange={updateUser}
          aria-required="true"
        />
      </div>

      <div className="user-form__group">
        <label htmlFor="address" className="user-form__label">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="user-form__input"
          value={user.address}
          onChange={updateUser}
          aria-required="true"
        />
      </div>
      <Button type="submit" className="outlined" disabled={!isDisabled}>
        Add
      </Button>
    </form>
  );
};

export default UserForm;

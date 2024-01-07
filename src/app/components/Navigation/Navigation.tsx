"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./Navigation.scss";

const Navigation = (): React.ReactElement => {
  const pathname = usePathname();

  return (
    <nav className="navigation">
      <ul className="navigation__link-list">
        <li>
          <Link
            className={`navigation__link ${
              pathname === "/users" ? "active" : ""
            }`}
            href="/users"
          >
            Users
          </Link>
        </li>
        <li>
          <Link
            className={`navigation__link ${
              pathname === "/add-user" ? "active" : ""
            }`}
            href="/add-user"
          >
            Add User
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

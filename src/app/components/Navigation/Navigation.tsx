"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { paths } from "../../routers/paths";
import "./Navigation.scss";

const Navigation = (): React.ReactElement => {
  const pathname = usePathname();

  return (
    <nav className="navigation">
      <ul className="navigation__link-list">
        <li>
          <Link
            className={`navigation__link ${
              pathname === paths.root ? "active" : ""
            }`}
            href={paths.root}
          >
            Users
          </Link>
        </li>
        <li>
          <Link
            className={`navigation__link ${
              pathname === paths.addUser ? "active" : ""
            }`}
            href={paths.addUser}
          >
            Add User
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

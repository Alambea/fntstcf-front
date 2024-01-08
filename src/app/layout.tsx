import type { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import { Oswald } from "next/font/google";
import Header from "./components/Header/Header";
import "./styles/styles.scss";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Userfy user control",
  description: "Website dedicated to control Userfy's users",
};

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout = ({ children }: RootLayoutProps): React.ReactElement => {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

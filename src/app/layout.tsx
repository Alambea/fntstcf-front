import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import React, { PropsWithChildren, Suspense } from "react";
import Header from "./components/Header/Header";
import UsersContextProvider from "./features/users/store/context/UsersContextProvider";
import "./styles/styles.scss";
import Loading from "./components/Loading/loading";

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
        <UsersContextProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </UsersContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;

import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import React, { PropsWithChildren, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/loading";
import UiContextProvider from "./store/ui/context/UiContextProvider";
import UsersContextProvider from "./store/users/context/UsersContextProvider";
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
        <ToastContainer />
        <UiContextProvider>
          <UsersContextProvider>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </UsersContextProvider>
        </UiContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;

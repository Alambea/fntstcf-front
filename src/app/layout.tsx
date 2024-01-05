import type { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import { Oswald } from "next/font/google";
import "./styles/styles.scss";

const inter = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Userticfy user control",
  description: "Website dedicated to control Userticfy's users",
};

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout = ({ children }: RootLayoutProps): React.ReactElement => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;

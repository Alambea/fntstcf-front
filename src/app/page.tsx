"use client";

import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { paths } from "./routers/paths";

const Home = (): React.ReactElement => {
  useEffect(() => {
    redirect(paths.users);
  });

  return <></>;
};

export default Home;

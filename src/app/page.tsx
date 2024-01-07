"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { paths } from "./routers/paths";

const Home = (): React.ReactElement => {
  const { replace } = useRouter();

  useEffect(() => {
    replace(paths.users);
  });

  return <></>;
};

export default Home;

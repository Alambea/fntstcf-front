"use client";

import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import UiContext from "./UiContext";
import { UiContextStructure } from "./types";

const UiContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const uiContextValue = useMemo(
    (): UiContextStructure => ({
      isLoading,
      showLoading,
      hideLoading,
    }),
    [isLoading, showLoading, hideLoading],
  );

  return (
    <UiContext.Provider value={uiContextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;

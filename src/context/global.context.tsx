import { FC } from "react";
import { SnackbarProvider } from "notistack";

import { NotificationsContextProvider } from "./notifications.context";

const GlobalContext: FC = ({ children }) => {
  return (
    <NotificationsContextProvider>
      <SnackbarProvider
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        {children}
      </SnackbarProvider>
    </NotificationsContextProvider>
  );
};

export default GlobalContext;

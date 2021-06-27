import { Box, CircularProgress } from "@material-ui/core";
import { FC, useContext } from "react";

import { NotificationsContext } from "../context/notifications.context";

const OperationInProgress: FC = () => {
  const { progressNotification: notification } =
    useContext(NotificationsContext);

  if (!notification) return null;

  return (
    <Box
      bgcolor="#eee"
      paddingX="2rem"
      paddingY="0.25rem"
      textAlign="center"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress color="secondary" size="1rem" />{" "}
      <p>{notification.payload}</p>
    </Box>
  );
};

export default OperationInProgress;

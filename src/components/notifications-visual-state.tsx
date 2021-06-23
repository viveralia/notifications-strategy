import { FC, useContext } from "react";
import { Grid } from "@material-ui/core";

import { NotificationsContext } from "../context/notifications.context";

const NotificationsVisualState: FC = () => {
  const { 
    notificationList, 
    progressNotification, 
    snackbarNotification } = useContext(NotificationsContext);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <h3>🔔 List</h3>
        <pre>{JSON.stringify(notificationList, null, 2)}</pre>
      </Grid>
      <Grid item xs={12} md={4}>
        <h3>Snackbar</h3>
        <pre>{JSON.stringify(snackbarNotification, null, 2)}</pre>
      </Grid>
      <Grid item xs={12} md={4}>
        <h3>Progress</h3>
        <pre>{JSON.stringify(progressNotification, null, 2)}</pre>
      </Grid>
    </Grid>
  );
};

export default NotificationsVisualState;
import Pusher from "pusher-js";
import { NextPage } from "next";
import { Container } from "@material-ui/core";
import { Fragment, useEffect } from "react";

import { IBaseNotification } from "../context/notifications.context";
import NotificationBuilder from "../components/notification-builder";
import NotificationsVisualState from "../components/notifications-visual-state";
import NotificationSnackbar from "../components/notification-snackbar";
import NotificationList from "../components/notification-list";
import OperationInProgress from "../components/operation-in-progress";
import useNotifications from "../hooks/use-notifications";

const notificationTypes = [
  "transaction",
  "card_assignment",
  "spei_in",
  "card_locked",
  "card_unlocked",
  "funds_transfer",
];

const INITIAL_NOTIFICATION: IBaseNotification = {
  type: "transaction",
  payload: "",
};

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
});

const pusherChannel = pusher.subscribe("testing");

const App: NextPage = () => {
  const { getChannelsDispatchers } = useNotifications();

  useEffect(() => {
    pusherChannel.bind_global((event, notification) => {
      getChannelsDispatchers(notification).forEach((dispatchChannel) => {
        dispatchChannel(notification);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <OperationInProgress />
      <Container style={{ marginTop: "2rem" }}>
        <NotificationList />
        <NotificationSnackbar />
        <NotificationsVisualState />
      </Container>
    </Fragment>
  );
};

export default App;

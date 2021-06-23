import { NextPage } from "next";
import { Container } from "@material-ui/core";

import { IBaseNotification } from "../context/notifications.context";
import NotificationBuilder from "../components/notification-builder";
import NotificationsVisualState from "../components/notifications-visual-state";
import useNotifications from "../hooks/use-notifications";

const notificationTypes = [
  "transaction", 
  "card_assignment", 
  "spei_in",
  "card_locked",
  "card_unlocked",
  "funds_transfer"
];

const INITIAL_NOTIFICATION: IBaseNotification = {
  type: "transaction",
  payload: "",
};

const App: NextPage = () => {
  const { getChannelsDispatchers } = useNotifications();

  function handleSubmit(notification: IBaseNotification): void {
    getChannelsDispatchers(notification).forEach(dispatchChannel => {
      dispatchChannel(notification);
    });
  };

  return (
    <Container style={{ marginTop: "2rem" }}>
      <NotificationBuilder 
        initialNotification={INITIAL_NOTIFICATION}
        handleSubmit={handleSubmit}
        notificationTypes={notificationTypes} />
      <NotificationsVisualState />
    </Container>
  )
}

export default App;

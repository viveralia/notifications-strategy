import { FC, useContext } from "react";

import { NotificationsContext } from "../context/notifications.context";

const NotificationList: FC = () => {
  const { notificationList: notifications } = useContext(NotificationsContext);

  return <p>Counter: {notifications.length}</p>;
};

export default NotificationList;

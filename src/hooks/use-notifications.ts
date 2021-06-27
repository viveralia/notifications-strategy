import { useContext } from "react";

import {
  IBaseNotification,
  NotificationsContext,
} from "../context/notifications.context";

const useNotifications = () => {
  const {
    notificationList,
    setNotificationList,
    setProgressNotification,
    setSnackbarNotification,
  } = useContext(NotificationsContext);

  function dispatchToSnackbar(notification: IBaseNotification) {
    setSnackbarNotification(notification);
  }

  function dispatchToProgress(notification: IBaseNotification) {
    setProgressNotification(notification);
  }

  function dispatchToList(notification: IBaseNotification) {
    setNotificationList([notification, ...notificationList]);
  }

  function getChannelsDispatchers(notification: IBaseNotification) {
    console.log("notificationType", notification?.type);

    const channelsStrategies = {
      transaction: [dispatchToList, dispatchToSnackbar],
      card_assignment: [dispatchToList, dispatchToSnackbar],
      spei_in: [dispatchToList, dispatchToSnackbar],
      card_locked: [dispatchToProgress],
      card_unlocked: [dispatchToProgress],
      funds_transfer: [dispatchToProgress],
    };

    return channelsStrategies[notification.type] || [];
  }

  return { getChannelsDispatchers };
};

export default useNotifications;

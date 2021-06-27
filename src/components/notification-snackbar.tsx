import { useSnackbar } from "notistack";
import { FC, useContext, useEffect } from "react";

import {
  IBaseNotification,
  NotificationsContext,
} from "../context/notifications.context";

interface ITransactionNotification extends Omit<IBaseNotification, "payload"> {
  payload: {
    amount: string;
    commerce: string;
  };
}

const snackbarStrategies = {
  transaction: {
    messageTemplate: (notification: ITransactionNotification) => {
      return `Compra en ${notification.payload.commerce} por ${notification.payload.amount}`;
    },
  },
  default: {
    messageTemplate: (notification: IBaseNotification) => {
      return `Something happened!`;
    },
  },
};

const getTemplate = (notification: IBaseNotification) => {
  const templateBuilder =
    snackbarStrategies[notification.type] || snackbarStrategies.default;
  const message = templateBuilder.messageTemplate(notification);
  return { message };
};

const NotificationSnackbar: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { snackbarNotification: notification } =
    useContext(NotificationsContext);

  useEffect(() => {
    if (!notification) return;

    const { message } = getTemplate(notification);

    enqueueSnackbar(message);
  }, [enqueueSnackbar, notification]);

  return null;
};

export default NotificationSnackbar;

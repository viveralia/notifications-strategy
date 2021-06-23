import { Dispatch, SetStateAction } from "react";
import { createContext, FC, useState } from "react";

export type NotificationTypes = 
  "transaction" | 
  "card_assignment" | 
  "spei_in" |
  "card_locked" |
  "card_unlocked" |
  "funds_transfer";

export interface IBaseNotification {
  type: NotificationTypes;
  payload: unknown;
}

interface INotificationsContextValues {
  notificationList: IBaseNotification[];
  setNotificationList: Dispatch<SetStateAction<IBaseNotification[]>>;
  snackbarNotification: IBaseNotification | null;
  setSnackbarNotification: Dispatch<SetStateAction<IBaseNotification | null>>;
  progressNotification: IBaseNotification | null;
  setProgressNotification: Dispatch<SetStateAction<IBaseNotification | null>>;
}

export const NotificationsContext = createContext({} as INotificationsContextValues);

export const NotificationsContextProvider: FC = ({ children }) => {
  // Channels: To support a new channel, just add a new state
  const [notificationList, setNotificationList] = useState<IBaseNotification[]>([]);
  const [snackbarNotification, setSnackbarNotification] = useState<IBaseNotification>(null);
  const [progressNotification, setProgressNotification] = useState<IBaseNotification>(null);

  return (
    <NotificationsContext.Provider value={{
      notificationList,
      setNotificationList,
      snackbarNotification,
      setSnackbarNotification,
      progressNotification,
      setProgressNotification,
    }}>
      {children}
    </NotificationsContext.Provider>
  )
}

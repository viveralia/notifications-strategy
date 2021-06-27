import { FC } from "react";

import DefaultTemplate from "./list-item-templates/default-template";
import TransactionTemplate from "./list-item-templates/transaction-template";
import { IBaseNotification } from "../context/notifications.context";

interface IListItemsBaseProps {
  notification: IBaseNotification;
}

const templateStrategies = {
  transaction: TransactionTemplate,
  default: DefaultTemplate,
};

const ListItemsBase: FC<IListItemsBaseProps> = ({ notification }) => {
  const Template =
    templateStrategies[notification.type] || templateStrategies.default;

  return <Template notification={notification} />;
};

export default ListItemsBase;

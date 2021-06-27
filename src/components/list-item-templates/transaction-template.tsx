import { FC } from "react";
import { Box } from "@material-ui/core";

import { IBaseNotification } from "../../context/notifications.context";

interface ITransactionNotification extends IBaseNotification {
  payload: {
    amount: string;
    trade_name: string;
  };
}

interface ITransactionTemplateProps {
  notification: ITransactionNotification;
}

const TransactionTemplate: FC<ITransactionTemplateProps> = ({
  notification,
}) => {
  return (
    <Box>
      <Title message={`${user} ha hecho una compra por ${amount} en ${trade_name}`} />
      <Date date={date} />
    </Box>
  );
};

export default TransactionTemplate;

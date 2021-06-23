import { FC, useState } from "react";
import { Box, Button, FormControl, InputLabel, Select, MenuItem, TextField } from "@material-ui/core";

import { IBaseNotification } from "../context/notifications.context";

interface INotificationBuilderProps {
  notificationTypes: string[];
  initialNotification: IBaseNotification;
  handleSubmit(notification: IBaseNotification): void;
}

const NotificationBuilder: FC<INotificationBuilderProps> = ({ 
  notificationTypes, 
  initialNotification,
  handleSubmit,
}) => {
  const [notification, setNotification] = useState<IBaseNotification>(initialNotification);

  function handleChange(e) {
    setNotification({ ...notification, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(notification);
    }}>
      <h1>Notification builder</h1>
      <Box mb={2}>
        <FormControl>
        <InputLabel>Type</InputLabel>
        <Select name="type" value={notification.type} onChange={handleChange}>
          {notificationTypes.map(type => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </Box>
      <Box mb={2}>
        <TextField
          required
          name="payload" 
          value={notification.payload} 
          label="Payload" 
          onChange={handleChange} />
      </Box>
      <Button variant="contained" color="secondary" type="submit">
        Dispatch notification
      </Button>
    </form>
  )
}

export default NotificationBuilder;
import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null, // will become {title, message, status}
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;

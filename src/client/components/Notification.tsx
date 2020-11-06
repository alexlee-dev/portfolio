import * as React from "react";
import { Box, Button, Heading } from "rebass";

import { Notification } from "../types";

interface NotificationProps {
  notification: Notification;
  setNotification: (Notification) => void;
}

const Notification: React.FunctionComponent<NotificationProps> = (
  props: NotificationProps
) => {
  const [opacityVal, setOpacityVal] = React.useState(1);
  const { notification, setNotification } = props;
  const { display, message, title, type } = notification;

  const Message = message;
  const iconClasses = {
    success: "far fa-check-circle",
    warning: "fas fa-exclamation-triangle",
  };

  React.useEffect(() => {
    if (opacityVal === 0 && display === true) {
      setOpacityVal(1);
    }
  }, [display]);

  const handleClose = () => {
    setOpacityVal(0);
    setTimeout(() => {
      setNotification({
        display: false,
        message: null,
        title: null,
        type: null,
      });
    }, 750);
  };

  if (display) {
    return (
      <Box
        id="notification-container"
        sx={{
          backgroundColor: "rgba(0,0,0,0.32)",
          height: "100vh",
          justifyContent: "center",
          opacity: opacityVal,
          position: "absolute",
          top: "0",
          transition: "opacity 0.75s ease-in-out",
          width: "100vw",
          zIndex: "50",
        }}
      >
        <Box
          id="notification"
          sx={{
            background: "white",
            borderRadius: "8px",
            boxSizing: "border-box",
            display: "grid",
            height: "fit-content",
            gridAutoFlow: "column",
            margin: "0 auto",
            marginTop: "100px",
            maxWidth: ["350px", "600px", "800px"],
            minWidth: "350px",
            opacity: opacityVal,
            padding: "25px",
            position: "relative",
            transition: "opacity 0.75s ease-in-out",
            width: "fit-content",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "#feeaea",
              borderRadius: "50%",
              color: "red",
              display: "flex",
              fontSize: "2",
              height: "38px",
              justifyContent: "center",
              marginBottom: "auto",
              marginRight: "15px",
              marginTop: "auto",
              width: "38px",
            }}
          >
            <i className={iconClasses[type]} />
          </Box>
          <div>
            <Heading as="h2" fontSize="3">
              {title}
            </Heading>
            <Message />
          </div>
          <Box>
            <Button
              disabled={opacityVal !== 1}
              onClick={() => handleClose()}
              sx={{
                alignItems: "center",
                background: "none",
                borderRadius: "50%",
                color: "#000000",
                display: "flex",
                height: "38px",
                fontSize: "2",
                justifyContent: "center",
                transition: "0.25s ease-in-out",
                width: "38px",
                ":hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                },
              }}
            >
              <i className="far fa-times" />
            </Button>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
};

export default Notification;

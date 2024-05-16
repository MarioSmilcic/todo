import { Snackbar, Alert } from "@mui/material";
import { useNotificationStore } from "../../store/notification/notification.store";

const Notification = () => {
  const { isOpen, text, severity, setClose } = useNotificationStore((s) => s);

  const handleClose = () => {
    setClose();
  };

  return (
    <div>
      <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {text}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Notification;

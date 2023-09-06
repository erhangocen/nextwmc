import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function VideoModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="text"
        color="inherit"
        sx={{ width: "fit-content" }}
        startIcon={<PlayCircleIcon />}
      >
        Video
      </Button>
      <Dialog
        sx={{padding: "0 !important"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <video className={`lazy w-100`} height={550} controls >
          <source src="/miley.mp4" />
        </video>
      </Dialog>
    </div>
  );
}

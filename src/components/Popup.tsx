import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  open: boolean;
}

export const Popup: React.FC<Props> = (props) => {
  const amount = useSelector((state: any) => state.task);
  const dispath = useDispatch();

  return (
    <Dialog open={props.open}>
      <DialogTitle>ARE YOU SURE?</DialogTitle>
      <DialogContent>
        <Typography>
          You will not be able to undo this action if you proceed!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus>Cancel</Button>
        <Button>Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

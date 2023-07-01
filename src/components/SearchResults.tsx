import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { AppColors } from "../constant/AppColors";
import { useNavigate } from "react-router-dom";

export const SearchResults: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography color={AppColors.DarkGray} ml={2}>
        4 results found for 'Books'
      </Typography>
      <Paper sx={{ ml: 10, mr: 10, mt: 2 }}>
        <List>
          <ListItem>
            <ListItemText
              primary={<Typography color={AppColors.Blue}>#ERT%^&</Typography>}
              secondary={
                <>
                  <Typography color={AppColors.Black}>iPhone 14 pro</Typography>
                  <Typography color={AppColors.DarkGray}>
                    Lorem ipsum text is thi
                  </Typography>
                </>
              }
            />
            <ListItemIcon>
              <Button onClick={() => navigate("/productDetail/")}>
                <img src="/assets/arrow.svg" />
              </Button>
            </ListItemIcon>
          </ListItem>
        </List>
      </Paper>
    </>
  );
};

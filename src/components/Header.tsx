import { ArrowDropDown, ZoomIn } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  FormControl,
  Icon,
  InputAdornment,
  OutlinedInput,
  Typography,
  colors,
} from "@mui/material";
import React from "react";
import { AppColors } from "../constant/AppColors";
import { useNavigate } from "react-router-dom";

interface Props {
  title?: string;
  searchBarEnable?: boolean;
}

export const Header: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ background: AppColors.White, padding: 2 }}
    >
      <Box display="flex" alignItems="center" marginLeft={"auto"} mr={10}>
        <Button
          sx={{ color: AppColors.Black }}
          variant="text"
          onClick={() => navigate("/")}
        >
          ADMIN
          <Icon sx={{ alignItems: "center", display: "flex" }}>
            <ArrowDropDown />
          </Icon>
        </Button>
        <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Avatar sx={{ bgcolor: colors.green[500], width: 10, height: 10 }}>
              <Icon />
            </Avatar>
          }
        >
          <Avatar />
        </Badge>
      </Box>
      {props.title && (
        <Typography variant="h4" color={AppColors.Black} marginLeft={10}>
          {props.title}
        </Typography>
      )}
      {props.searchBarEnable && (
        <Box display="flex" alignItems="center" ml={10} mr={10}>
          <FormControl variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type={"text"}
              sx={{
                backgroundColor: AppColors.LightGray,
                borderRadius: 10,
                height: 45,
                marginTop: 2,
              }}
              placeholder="Search for products"
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    sx={{ borderRadius: 5 }}
                    onClick={() => navigate("/searchResult")}
                  >
                    <ZoomIn />
                    Search
                  </Button>
                </InputAdornment>
              }
            />
          </FormControl>

          <Box marginLeft={"auto"}>
            <Button
              variant="contained"
              sx={{ height: 40 }}
              onClick={() => {
                navigate("/addProduct");
              }}
            >
              New Product
            </Button>
            <Button
              variant="contained"
              sx={{ marginLeft: 2 }}
              onClick={() => navigate("/favouriteProducts")}
            >
              <img src="/assets/star.svg" />
            </Button>
          </Box>
        </Box>
      )}
    </AppBar>
  );
};

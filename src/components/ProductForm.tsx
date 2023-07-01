import {
  Box,
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const ProductForm: React.FC = () => {
  return (
    <Paper sx={{ marginLeft: 10, marginRight: 10, marginTop: 4, padding: 2 }}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <TextField label={"SKU"} fullWidth />
        </Grid>
        <Grid container spacing={4} mt={1}>
          <Grid item md={6} xs={12}>
            <TextField label={"Name"} fullWidth />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField label={"Quantity"} fullWidth />
          </Grid>
        </Grid>
      </Grid>
      <Grid item mt={4} md={12}>
        <FormHelperText>A small description about the project</FormHelperText>
        <TextField label={"product description"} fullWidth multiline />
      </Grid>
      <Box display={"flex"} alignItems={"center"}>
        <Typography>Product Images</Typography>
      </Box>
      <Button
        sx={{ marginLeft: "auto", display: "block" }}
        variant={"contained"}
      >
        Add product
      </Button>
    </Paper>
  );
};

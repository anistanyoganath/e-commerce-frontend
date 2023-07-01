import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export const AddProductForm: React.FC = () => {
  return (
    <Paper>
      <Box flex={1}>
        <Typography>SKU</Typography>
        <TextField />
      </Box>
      <Box flex={1}>
        <Typography>Name</Typography>
        <TextField />
        <Box flex={1}>
          <Typography>QTY</Typography>
          <TextField />
        </Box>
      </Box>
      <TextField label={"product description"} />
      <Box display={"flex"}>
        <Typography>Product Images</Typography>
      </Box>
      <Button variant={"contained"}>Add product</Button>
      
    </Paper>
  );
};

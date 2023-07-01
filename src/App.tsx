import {
  Backdrop,
  CircularProgress,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { AppColors } from "./constant/AppColors";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/Store";
import { MainPage } from "./pages/MainPage";
import { AddProductPage } from "./pages/AddProductPage";

const theme = createTheme({
  palette: {
    primary: { main: AppColors.Blue, contrastText: AppColors.White },
    secondary: {
      main: AppColors.White,
      light: AppColors.LightGray,
      dark: AppColors.Black,
      contrastText: AppColors.Black,
    },
  },
  typography: {
    fontFamily: "satoshi",
  },
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/newProduct",
    element: <AddProductPage />
  }
]);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Backdrop
          sx={{ color: AppColors.White, zIndex: 999999999 }}
          open={false}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

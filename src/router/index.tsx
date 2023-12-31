import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../Components/common/Products";
import Home from "../Components/layout/Home";
import Product from "../Components/common/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Products />,
      },
      {
        path: "/shop/:id",
        element: <Product />,
      },
    ],
  },
]);

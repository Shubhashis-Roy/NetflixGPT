import React from "react";
import Login from "../Auth/Login";
import Browse from "../Browse/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "../Cart/Cart";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

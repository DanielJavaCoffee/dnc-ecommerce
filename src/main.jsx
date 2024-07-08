import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { PRODUCTS_MOCK } from "./mock/ProdutosMok"
import Login from './views/Login/Login'
import Pay from './views/Pay/Pay'
import Home from './views/Home/Home'
import Products from './views/Products/Products'

import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK}></Home>
  },
  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCK}></Products>
  },
  {
    path: "/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK}></Pay>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
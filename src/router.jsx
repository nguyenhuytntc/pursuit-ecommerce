import About from "@pages/About";
import Brand from "@pages/Brand";
import Category from "@pages/Category";
import HomePage from "@pages/HomePage";
import Pages from "@pages/Pages";
import Products from "@pages/Products";
import Shop from "@pages/Shop";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/category",
                element: <Category />,
            },
            {
                path: "/brand",
                element: <Brand />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/pages",
                element: <Pages />,
            },
        ],
    },
]);

export default router;

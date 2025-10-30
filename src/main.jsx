import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalStyles from "@components/GlobalStyles";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GlobalStyles>
            <RouterProvider router={router} />
        </GlobalStyles>
    </StrictMode>
);

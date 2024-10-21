import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import "./custom.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./contextProvider/AuthProvider.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import "./i18n.js"

AOS.init();

createRoot(document.getElementById("root")).render(

  <StrictMode>
      <Provider store={store}>
        <AuthProvider>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </HelmetProvider>
        </AuthProvider>
        <Toaster />
      </Provider>
  </StrictMode>

);

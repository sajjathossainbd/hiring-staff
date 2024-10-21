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
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <RouterProvider router={router} />
            </I18nextProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </AuthProvider>
      <Toaster />
    </Provider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Changed from 'react-router' to 'react-router-dom'om";  // Changed from 'react-router' to 'react-router-dom'
import "./index.css";
import App from "./App.tsx";
import store from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

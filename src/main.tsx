import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@aws-amplify/ui-react/styles.css";
import { summerTheme } from "./theme";
import { ThemeProvider } from "@aws-amplify/ui-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={summerTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

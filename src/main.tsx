import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import "./styles/globals.css";

// Inject a custom CSS root for red-dominant restaurant theme
const restaurantTheme = `
  :root {
    --color-brand-primary: #ff6b4a;
    --color-brand-secondary: #d94828;
    --color-brand-accent: #ffad84;
    --color-background-main: #fff7ec;
    --color-background-soft: #fffaf2;
    --color-foreground-main: #26170e;
    --color-muted: #6f5b4a;
    --color-border: #f6e0c6;
    --color-widget-bg: #ffe7cf;
    --color-widget-alt: #f1ddc9;
  }
  body {
    background: var(--color-background-main);
  }
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = restaurantTheme;
document.head.appendChild(styleTag);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
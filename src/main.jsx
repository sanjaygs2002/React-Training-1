import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Element from "./WithoutJsx/Element.jsx";
import Provider from "./Context/Auth/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App />
      {/* <Element/> */}
    </Provider>
  </StrictMode>,
);

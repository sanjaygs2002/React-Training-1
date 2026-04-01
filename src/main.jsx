import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Element from "./WithoutJsx/Element.jsx";
import Providers from "./Context/Auth/Provider.jsx";
import { Provider } from "react-redux";
// import store from "./NormalRedux/store.js";
import store from "./ReduxToolkit/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
  
      <App />
      {/* <Element/> */}
    
    </Provider>
  </StrictMode>,
);

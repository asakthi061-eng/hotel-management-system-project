
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./redux/store";

import "./index.css";
import "./styles/Header.css";
import "./styles/HotelCard.css";
import "./styles/HotelList.css";
import "./styles/Components.css";
import "./styles/HotelForm.css";
import "./styles/HotelDetails.css";
import "./styles/Responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

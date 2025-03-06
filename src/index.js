import React from "react";
import ReactDOM from "react-dom/client";
import DataProvider from "./components/DataProvider/DataProvider";
import { reducer, initialState } from "./Utility/reducer";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "app/App";
import { Provider } from "react-redux";
import { configureStore } from "app/store/config";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore().store}>
      <PersistGate loading={null} persistor={configureStore().persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

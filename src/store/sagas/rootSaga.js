import { handleRequests } from "@redux-requests/core";
import { createDriver } from "@redux-requests/axios";
import { httpDriver } from "../../utils/httpDriver";
import rootReducer from "../rootReducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import onRequest from "./interceptors/onRequest";
import onSuccess from "./interceptors/onSuccess";

export const configureStore = () => {
  const { requestsMiddleware } = handleRequests({
    driver: createDriver(httpDriver),
    onRequest: onRequest,
    onSuccess: onSuccess,
  });

  const persistConfig = {
    key: "root",
    storage,
    whitelist: "auth",
    stateReconciler: autoMergeLevel2,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    applyMiddleware(...requestsMiddleware)
  );
  const persistor = persistStore(store, {}, () => {
    console.log("redux persists");
  });

  return { store, persistor };
};

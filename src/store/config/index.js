import { handleRequests } from "@redux-requests/core";
import { createDriver } from "@redux-requests/axios";
import { httpDriver } from "../../utils/httpDriver";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import { onRequest, onSuccess, onError } from "./interceptors";
import { composeEnhancers, middlewares, persistedReducer } from "./config";

export const configureStore = () => {
  handleRequests({
    driver: createDriver(httpDriver),
    onRequest: onRequest,
    onSuccess: onSuccess,
    onError: onError,
  });

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  const persistor = persistStore(store);

  return { store, persistor };
};

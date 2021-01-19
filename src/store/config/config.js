import rootReducer from "./rootReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { compose } from "redux";
import logger from "redux-logger";
import { env } from "../../utils/env";
import { handleRequests } from "@redux-requests/core";

const { requestsMiddleware } = handleRequests();

const persistConfig = {
  key: "root",
  storage,
  whitelist: "auth",
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [...requestsMiddleware];

if (env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const onRequest = (req) => {
  return req;
};

const onSuccess = (req) => {};

const onError = (req) => {};

export {
  persistedReducer,
  composeEnhancers,
  middlewares,
  onRequest,
  onSuccess,
  onError,
};

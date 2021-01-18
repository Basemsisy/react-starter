import { combineReducers } from "redux";
import { handleRequests } from "@redux-requests/core";
import auth from "./auth/reducer";
import main from "./main/reducer";

const { requestsReducer } = handleRequests();
const reducers = combineReducers({
  requests: requestsReducer,
  auth,
  main,
});

export default reducers;

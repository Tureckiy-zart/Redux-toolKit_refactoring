import { createStore, combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage'
import { configureStore } from "@reduxjs/toolkit";

import { configReducer, configSlise } from "./config/configReducer";
// import { sessionReducer } from "./session/sessionReducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["session", "config"],
// };

const rootReducer = combineReducers({
  // config: configReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// persistStore(store)

export const store = configureStore({
  reducer: {
    [configSlise.name]: configSlise.reducer,
    // session: sessionReducer,
  },
});

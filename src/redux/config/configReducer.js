import types from "../types";
import { createReducer, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   nodeEnv: null,
//   productName: null,
//   productOwner: null,
//   authDomain: null,
// };

// export const configReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.SET_DEPENDENCE:
//       return { ...state, nodeEnv: payload.environment };
//     case types.SET_PRODUCT_NAME:
//       return { ...state, productName: payload.name };
//     case types.SET_PRODUCT_OWNER:
//       return { ...state, productOwner: payload.owner };
//     case types.SET_DOMAIN:
//       return { ...state, authDomain: payload.domain };
//     default:
//       return state;
//   }
// };

// const handlers = {
//   [types.SET_DEPENDENCE]: (state, { payload }) => ({
//     ...state,
//     nodeEnv: payload.environment,
//   }),
//   [types.SET_PRODUCT_NAME]: (state, { payload }) => ({
//     ...state,
//     productName: payload.name,
//   }),
//   [types.SET_PRODUCT_OWNER]: (state, { payload }) => ({
//     ...state,
//     productOwner: payload.owner,
//   }),
//   [types.SET_DOMAIN]: (state, { payload }) => ({
//     ...state,
//     authDomain: payload.domain,
//   }),

//   DEFAULT: (state) => state,
// };

// export const configReducer = (state = initialState, action) => {
//   const handler = handlers[action.type] || handlers.DEFAULT;
//   return handler(state, action);
// };

//toolkit
const initialState = {
  nodeEnv: null,
  productName: null,
  productOwner: null,
  authDomain: null,
};
export const configSlise = createSlice({
  name: "config",
  initialState,
  reducers: {
    setDependence: (state, { payload }) => ({
      ...state,
      nodeEnv: payload,
    }),
    setProductName: (state, { payload }) => ({
      ...state,
      productName: payload,
    }),
    setProductOwner: (state, { payload }) => ({
      ...state,
      productOwner: payload,
    }),
    setDomain: (state, { payload }) => ({
      ...state,
      authDomain: payload,
    }),

  },
});
console.log("configSlise", configSlise);
// const setDependenceReduser = (state, { payload }) => ({
//   ...state,
//   nodeEnv: payload,
// });
// const setProductNameReduser = (state, { payload }) => ({
//   ...state,
//   productName: payload,
// });
// const setProductOwnerReduser = (state, { payload }) => ({
//   ...state,
//   productOwner: payload,
// });

// export const configReducer = createReducer(initialState, {
//   DEPENDENCE: setDependenceReduser,
//   [types.SET_PRODUCT_NAME]: setProductNameReduser,
//   [types.SET_PRODUCT_OWNER]: setProductOwnerReduser,
//   [types.SET_DOMAIN]: (state, { payload }) => ({
//     ...state,
//     authDomain: payload,
//   }),
// });
// createSlice;

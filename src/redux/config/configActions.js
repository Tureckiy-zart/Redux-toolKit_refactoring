import types from "../types";
import { createAction } from "@reduxjs/toolkit";

// export const setDependence = (environment) => ({
//   type: types.SET_DEPENDENCE,
//   payload: { environment },
// });

// export const setProductName = (name) => ({
//   type: types.SET_PRODUCT_NAME,
//   payload: { name },
// });

// export const setProductOwner = (owner) => ({
//   type: types.SET_PRODUCT_OWNER,
//   payload: { owner },
// });

// export const setDomain = (domain) => ({
//   type: types.SET_DOMAIN,
//   payload: { domain },
// });
//toolkit

export const setDependence = createAction("DEPENDENCE");
export const setProductName = createAction(types.SET_PRODUCT_NAME);
export const setProductOwner = createAction(types.SET_PRODUCT_OWNER);
export const setDomain = createAction(types.SET_DOMAIN);

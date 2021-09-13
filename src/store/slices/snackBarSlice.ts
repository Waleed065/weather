import {
  emptyActionType,
  snackbarStateType,
  stringActionType,
} from "../../types";

// ---------------------constants----------------
const setSnackBarConst = "setSnackBar";
const clearSnackBarConst = "clearSnackBar";

// ---------------------reducers----------------
const defaultState = {
  message: "",
  show: false,
};

export default function snackBar(
  state: snackbarStateType = defaultState,
  action: stringActionType
): snackbarStateType {
  switch (action.type) {
    case setSnackBarConst:
      return {
        message: action.payload,
        show: true,
      };
    case clearSnackBarConst:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}

// ---------------------actions----------------
export function setSnackBar(payload: string): stringActionType {
  return {
    type: setSnackBarConst,
    payload,
  };
}
export function clearSnackBar(): emptyActionType {
  return {
    type: clearSnackBarConst,
  };
}

import { emptyActionType, stringActionType } from "../../types";

// ---------------------constants----------------
const setSnackBarConst = "setSnackBar";
const clearSnackBarConst = "clearSnackBar";

// ---------------------reducers----------------

export default function snackBar(
  state: string = "",
  action: stringActionType
): string {
  switch (action.type) {
    case setSnackBarConst:
      return action.payload;
    case clearSnackBarConst:
      return "";
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

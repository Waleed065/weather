import { booleanActionType } from "../../types";

// ---------------------constants----------------
const setLoadingConst = "setLoading";
// ---------------------reducers----------------

export default function isCelsiusSlice(
  state: boolean = false,
  action: booleanActionType
): boolean {
  switch (action.type) {
    case setLoadingConst:
      return action.payload;
    default:
      return state;
  }
}

// ---------------------actions----------------
export function setLoading(payload: boolean): booleanActionType {
  return {
    type: setLoadingConst,
    payload,
  };
}

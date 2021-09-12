import { booleanActionType,  } from "../../types";

// ---------------------constants----------------
const setIsCelsiusConst = "setIsCelsius";
// ---------------------reducers----------------

export default function isCelsiusSlice(
  state: boolean = true,
  action: booleanActionType
): boolean {
  switch (action.type) {
    case setIsCelsiusConst:
      return action.payload;
    default:
      return state;
  }
}

// ---------------------actions----------------
export function setIsCelsius(payload: boolean): booleanActionType {
  return {
    type: setIsCelsiusConst,
    payload,
  };
}

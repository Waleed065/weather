import { StateType } from './../../types/index';
import { DispatchType, indexActionType } from "../../types";
import { setSnackBar } from "./snackBarSlice";

/* --------------constants-------------- */
const setActiveWeatherIndexConst = "setActiveWeatherIndex";

/* --------------reducers-------------- */

const defaultState = 0;
export default function activeWeatherIndex(
  state: number = defaultState,
  action: indexActionType
) {
  switch (action.type) {
    case setActiveWeatherIndexConst:
      return action.payload;
    default:
      return state;
  }
}

/* --------------actions-------------- */
const action = (payload: number): indexActionType => ({
  type: setActiveWeatherIndexConst,
  payload,
});

export function setActiveWeatherIndex(payload: number) {
  return (dispatch: DispatchType, getState: () => StateType) => {
    const dailyWeatherLength = getState().weather.daily?.length - 1;

    if (payload > dailyWeatherLength || payload < 0) {
      dispatch(setSnackBar("Out of range weather index"));
      return;
    }

    dispatch(action(payload));
  };
}

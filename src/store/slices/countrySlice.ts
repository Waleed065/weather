import { countryActionType, countryType } from "../../types";
import { countries } from "../../utils/countries";

/* --------------constants-------------- */
const setCountryConst = "setCountry";

/* --------------reducers-------------- */
const defaultState = countries[0];

export default function country(
  state: countryType = defaultState,
  action: countryActionType
) {
  switch (action.type) {
    case setCountryConst:
      return action.payload;
    default:
      return state;
  }
}

/* --------------actions-------------- */
export function setCountry(payload: countryType): countryActionType {
  return {
    type: setCountryConst,
    payload,
  };
}

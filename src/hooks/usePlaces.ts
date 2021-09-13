import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../types";

declare const window: any;

interface schema {
  value: string;
  setSuggestions: (arg: any) => void;
  setLoading: (arg: boolean) => void;
}
export default function usePlaces({
  value,
  setSuggestions,
  setLoading,
}: schema) {
  const countryCode = useSelector(
    (state: StateType) => state.country.alpha2Code
  );
  const autocompleteService = useRef<any>(null);
  const autocompleteOK = useRef<any>(null);

  useEffect(() => {
    if (!window.google) {
      throw new Error(
        "[react-places-autocomplete]: Google Maps JavaScript API library must be loaded. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library"
      );
    }

    if (!window.google.maps.places) {
      throw new Error(
        "[react-places-autocomplete]: Google Maps Places library must be loaded. Please add `libraries=places` to the src URL. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library"
      );
    }

    autocompleteService.current =
      new window.google.maps.places.AutocompleteService();
    autocompleteOK.current = window.google.maps.places.PlacesServiceStatus.OK;
  }, []);

  const throttle = useRef<any>(null);
  useEffect(() => {
    if (value.length === 0 || /^\d+$/.test(value)) {
      setLoading(false);
      return;
    }

    clearTimeout(throttle.current);
    throttle.current = setTimeout(() => {
      fetchPredictions(value);
    }, 800);

    return () => {
      clearTimeout(throttle.current);
    };
    // eslint-disable-next-line
  }, [value]);

  const autocompleteCallback = (predictions: any, status: any) => {
    setLoading(false);

    if (status !== autocompleteOK.current) {
      console.error(
        "[react-places-autocomplete]: error happened when fetching data from Google Maps API.\nPlease check the docs here (https://developers.google.com/maps/documentation/javascript/places#place_details_responses)\nStatus: ",
        status
      );
      setSuggestions([]);
      return;
    }

    setSuggestions(
      predictions.map((p: any) => ({
        title: p.description,
        city: p.structured_formatting.main_text,
      }))
    );
  };

  const fetchPredictions = (input: string) => {
    if (value.length) {
      setLoading(true);

      autocompleteService.current.getPlacePredictions(
        {
          types: ["(cities)"],
          componentRestrictions: {
            country: countryCode,
          },
          input,
        },
        autocompleteCallback
      );
    }
  };
}

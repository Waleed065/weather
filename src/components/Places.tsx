import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import usePlaces from "../hooks/usePlaces";
import TransitionHeight from "./TransitionHeight";

type suggestionType = {
  title: string;
  city: string;
};
interface schema {
  shouldShow: boolean;
  setShouldShow: (arg: boolean) => void;
  searchOptionsRef: React.RefObject<HTMLDivElement>;
  value: string;
  onSubmit: (e: any, val: string) => void;
}
export default function Places({
  shouldShow,
  setShouldShow,
  searchOptionsRef,
  value,
  onSubmit,
}: schema) {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<suggestionType[]>([]);

  usePlaces({ value,  setSuggestions, setLoading });

  const onSelect = (val: suggestionType) => {
    setShouldShow(false);
    setSuggestions([]);
    onSubmit(null, val.city);
  };

  return (
    <TransitionHeight
      shouldShow={shouldShow}
      setShouldShow={setShouldShow}
      onSelect={onSelect}
      options={suggestions}
      itemTitle={'title'}
      loading={loading}
      optionsIcon={<MdLocationOn />}
      searchOptionsRef={searchOptionsRef}
    />
  );
}

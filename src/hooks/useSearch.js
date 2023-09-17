import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../heroes/helpers";
import queryString from "query-string";

export const useSearch = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  return {
    q,
    heroes,
    showSearch,
    showError,
  };
};

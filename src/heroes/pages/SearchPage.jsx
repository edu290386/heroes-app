import { useNavigate } from "react-router-dom";
import { HeroCard } from "../components";
import { useForm, useSearch } from "../../hooks";

export const SearchPage = () => {
  const navigate = useNavigate();
  const { searchText, onInputChange } = useForm({ searchText: "" });
  const { q, heroes, showSearch, showError } = useSearch();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="" onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>
          {heroes?.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

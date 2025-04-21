import { useLocation } from "react-router-dom";
import "../assets/styles/SearchOverlay.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery().get("q");

  return (
    <div className="container search-container px-5 py-5">
      <h1>Search Results</h1>
      <p>You searched for: <strong>{query}</strong></p>
    </div>
  );
}

export default SearchPage;

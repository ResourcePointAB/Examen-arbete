import { useLocation } from "react-router-dom";
import { pageContents } from "../content";
import "../assets/styles/SearchOverlay.css";

// Söker efter ett ord i en text och markerar det med <mark> taggen
function highlightMatch(text: string, query: string) {
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query ? <mark key={i}>{part}</mark> : part
  );
}

// hämta själva sökordet från URL:en
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery().get("q")?.toLowerCase() || "";

  // Filtrera innehåll som matchar sökningen
  const filteredResults = pageContents.filter((page) =>
    page.content.toLowerCase().includes(query) ||
    page.name.toLowerCase().includes(query)
  );

  return (
    <div className="container search-container px-5 py-5">
      <h1>Search Results</h1>
      <p>
        You searched for: <strong>{query}</strong>
      </p>

      {filteredResults.length > 0 ? (
        <div>
          {filteredResults.map((page) => (
            <div key={page.name} className="search-result-item mb-4">
              <h3>{highlightMatch(page.name, query)}</h3>
              <p>{highlightMatch(page.content.slice(0, 700), query)}...</p>
              <a href={page.path}>Read more</a>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchPage;


import { useLocation } from "react-router-dom";
import { pageContents } from "../content";
import { useTranslation } from "react-i18next";
import "../assets/styles/SearchOverlay.css";

// Söker efter ett ord i en text och markerar det med <mark> taggen
function highlightMatch(text: string, query: string) {
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query ? <mark key={i}>{part}</mark> : part
  );
}

// Hämtar en del av texten som matchar sökordet
function getHighlightedExcerpt(text: string, query: string, snippetLength = 300) {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const matchIndex = lowerText.indexOf(lowerQuery);

  // fallback om inget matchas
  if (matchIndex === -1) {
    return text.slice(0, snippetLength); 
  }

  const start = Math.max(matchIndex - 60, 0);
  const end = Math.min(start + snippetLength, text.length);

  return text.slice(start, end);
}

// hämta själva sökordet från URL:en
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const { i18n } = useTranslation();
  const { t } = useTranslation()
  const query = useQuery().get("q")?.toLowerCase() || "";

  // Filtrera innehåll som matchar sökningen baserat på det valda språket
  const filteredResults = pageContents.filter((page) => {
    const content = page.content[i18n.language as keyof typeof page.content] || ""; 
    return content.toLowerCase().includes(query) ||
      page.name.toLowerCase().includes(query);
  });

  return (
    <div className="container search-container px-5 py-5 flex-fill">
      <h1 style={{marginTop:"30px"}}>{t("search.title")}</h1>
      <p>
      {t("search.youSearchedFor")}: <strong>{query}</strong>
      </p>

      {filteredResults.length > 0 ? (
        <div>
          {filteredResults.map((page) => (
            <div key={page.name} className="search-result-item mb-4">
              <h3>{highlightMatch(page.name, query)}</h3>
              <p>{highlightMatch(getHighlightedExcerpt(page.content[i18n.language as keyof typeof page.content] || "", query), query)}...</p>
              <a href={page.path}>{t("search.readMore")}</a>
            </div>
          ))}
        </div>
      ) : (
        <p>{t("search.noResults")}</p>
      )}
    </div>
  );
}

export default SearchPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/SearchOverlay.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  if (!isOpen) return null;

  return (
    <div className="search-overlay">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        {/* <button
          type="submit"
          className="btn btn-outline-primary d-sm-none"
          style={{ backgroundColor: "transparent", border: "none", color: "white" }}
        >
          <i className="bi bi-arrow-right"></i>
        </button> */}
        <button type="button" className="close-btn" onClick={onClose}>
          ×
        </button>
      </form>
    </div>
  );
};

export default SearchOverlay;

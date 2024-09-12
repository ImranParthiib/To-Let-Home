import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", query);
  };

  return (
    <section className="h-screen">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for homes..."
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default Search;

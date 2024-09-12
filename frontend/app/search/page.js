'use client'
import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/search?q=${query}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search Homes</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result) => (
          <div key={result._id} className="border p-4 rounded">
            <h3 className="text-xl font-bold">{result.title}</h3>
            <p>{result.description}</p>
            <p>Price: ${result.price}</p>
            <p>Location: {result.location}</p>
            <img src={`http://localhost:8000/${result.image1}`} alt="Home Image 1" className="w-full h-48 object-cover mt-2" />
            <img src={`http://localhost:8000/${result.image2}`} alt="Home Image 2" className="w-full h-48 object-cover mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
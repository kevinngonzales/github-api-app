import React, { useState } from "react";

function Search({onSearch}) {
  const [username, setUsername] = useState("");

  return (
    <form className="form-container" onSubmit={(e) => onSearch(e, username)}>
      <label htmlFor="default-search">Search</label>
      <div>
        <img src="/search-icon.png" className="search-icon" />
        <input
          type="search"
          id="default-search"
          placeholder="i.e. johndoe"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default Search;

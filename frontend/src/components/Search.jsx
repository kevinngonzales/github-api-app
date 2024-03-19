import React, { useState } from "react";

function Search({onSearch}) {
  const [username, setUsername] = useState("");

  return (
    <form onSubmit={(e) => onSearch(e, username)}>
      <label htmlFor="default-search">Search</label>
      <div>
        // we'll add a search icon, later
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

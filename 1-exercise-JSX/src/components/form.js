import React from "react";

export function Form() {
  return (
    <form>
      <label htmlFor="search-input">Search:</label>
      <input id="search-input" />
      <button className="submit-btn">Submit</button>
    </form>
  );
}

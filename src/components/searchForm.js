import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          placeholder="Filter Search"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;

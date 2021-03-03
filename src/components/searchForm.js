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
        <p>
          Click on Corrorts to filter by or use the search box to narrow your
          results
        </p>
      </div>
    </form>
  );
}

export default SearchForm;

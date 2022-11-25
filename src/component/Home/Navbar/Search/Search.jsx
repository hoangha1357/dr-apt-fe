import React from "react";
import "./Search.scss"

function Search(props) {
    return (props.trigger) ? (
        <div class="box-search">
            <div class="border"></div>
            <form action="" class="search-form">
              <input
                type="search"
                placeholder="Search here..."
                id="search-box"
              />
              <label for="search-box" class="bx bx-search"></label>
            </form>
          </div>
    ) : "";
}
export default Search
import React, { useState } from "react";

import "./Searchbar.css";

function Searchbar() {
  return (
    <div class="search-bar">
      <input type="text" placeholder="Search..." class="search-input" />
      <div class="user-info"></div>
    </div>
  );
}

export default Searchbar;

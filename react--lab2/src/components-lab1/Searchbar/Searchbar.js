import React, { useState } from "react";

import "./Searchbar.css";

function Searchbar({ fontsize, theme }) {
  const style = { fontSize: `${fontsize}px` };

  const getThemedClass = (className) => {
    if (theme == '"DARK"') return `${className} ${className}--dark`;
    return className;
  };

  return (
    <div style={style} class={getThemedClass("search-bar")}>
      <input
        style={style}
        type="text"
        placeholder="Search..."
        class={getThemedClass("search-input")}
      />
      <div class="user-info"></div>
    </div>
  );
}

export default Searchbar;

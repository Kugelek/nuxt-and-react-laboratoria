import React, { useState, useEffect } from "react";

import "./Searchbar.css";

function Searchbar({ fontsize, theme }) {
  const style = { fontSize: `${fontsize}px` };
  const [username, setUsername] = useState("");

  const getThemedClass = (className) => {
    if (theme == '"DARK"') return `${className} ${className}--dark`;
    return className;
  };
  useEffect(() => {
    if (sessionStorage.getItem("current-username"))
      setUsername(sessionStorage.getItem("current-username"));
  }, []);
  return (
    <div style={style} class={getThemedClass("search-bar")}>
      <input
        style={style}
        type="text"
        placeholder="Search..."
        class={getThemedClass("search-input")}
      />
      {username && username != "" ? (
        <div class={getThemedClass("user")}>You're logged in as {username}</div>
      ) : (
        <div class={getThemedClass("user")}>Youre browsing as a guest</div>
      )}
      <div class="user-info"></div>
    </div>
  );
}

export default Searchbar;

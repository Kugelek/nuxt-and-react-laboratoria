import React, { useState, createContext, useContext, useEffect } from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import { FontsizeContext } from "../../context";

function SideNav({ fontsize, setFontsize, theme, setTheme }) {
  const MAX_FONT_SIZE = 50;
  const MIN_FONT_SIZE = 10;

  const style = { fontSize: `${fontsize}px` };
  const [username, setUsername] = useState("");

  const getThemedClass = (className) => {
    if (theme == '"DARK"') return `${className} ${className}--dark`;
    return className;
  };

  const logout = () => {
    sessionStorage.setItem("current-username", "");
    sessionStorage.setItem("current-password", "");
    window.location.reload(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("current-username"))
      setUsername(sessionStorage.getItem("current-username"));
  }, []);

  return (
    <nav class={getThemedClass("nav")} style={style}>
      <Link to="/">
        {" "}
        <div class={getThemedClass("logo")}>myDashboard.pl</div>{" "}
      </Link>
      <section class="accesibility" style={style}>
        <h5
          class={getThemedClass("section-heading")}
          style={{ fontSize: `${fontsize}px` }}
        >
          Accesibility tools{" "}
        </h5>
        <button
          style={style}
          class={getThemedClass("btn-item")}
          disabled={fontsize * 1 >= MAX_FONT_SIZE}
          onClick={() => {
            if (fontsize * 1 >= MAX_FONT_SIZE) return;
            localStorage.setItem("fontsize", JSON.stringify(fontsize * 1 + 5));
            setFontsize(fontsize * 1 + 5);
          }}
        >
          + Increase fontsize
        </button>
        <button
          style={style}
          class={getThemedClass("btn-item")}
          onClick={() => {
            if (fontsize * 1 <= MIN_FONT_SIZE) return;
            localStorage.setItem("fontsize", JSON.stringify(fontsize * 1 - 5));
            setFontsize(fontsize * 1 - 5);
          }}
        >
          - Decrease fontsize
        </button>
        {/* </FontsizeContext.Provider> */}
        <button
          class={getThemedClass("btn-item")}
          style={style}
          onClick={() => {
            let desiredTheme = "LiGHT";
            if (theme && theme != null) {
              try {
                desiredTheme = JSON.parse(theme) == "LIGHT" ? "DARK" : "LIGHT";
              } catch {}
            }

            localStorage.setItem("theme", JSON.stringify(desiredTheme));
            setTheme(desiredTheme);
          }}
        >
          Darkmode
        </button>
      </section>
      <section class="section">
        <h5 style={style} class={getThemedClass("section-heading")}>
          Pages{" "}
        </h5>
        {username && username != "" ? (
          <>
            <Link to="/">
              <div class={getThemedClass("nav-item")}>Dashboard</div>{" "}
            </Link>
            <Link to="/account-settings">
              <div class={getThemedClass("nav-item")}>Account settings</div>
            </Link>
            <Link to="/my-posts">
              <div class={getThemedClass("nav-item")}>My posts</div>
            </Link>

            <div class={getThemedClass("nav-item")} onClick={logout}>
              Logout
            </div>
          </>
        ) : (
          <Link to="/login">
            <div class={getThemedClass("nav-item")}>Login</div>
          </Link>
        )}
      </section>
      {username && username != "" && (
        <section class="section">
          <h5 style={style} class={getThemedClass("section-heading")}>
            Components{" "}
          </h5>
          <Link to="/cards">
            <div class={getThemedClass("nav-item")}>Cards</div>
          </Link>
          <Link to="/contact">
            <div class={getThemedClass("nav-item")}>Contact me</div>
          </Link>
        </section>
      )}
    </nav>
  );
}

export default SideNav;

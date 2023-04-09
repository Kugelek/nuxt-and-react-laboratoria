import React, { useState, createContext, useContext } from "react";
import "./SideNav.css";

import { FontsizeContext } from "../../context";

function SideNav({ fontsize, setFontsize, theme, setTheme }) {
  const MAX_FONT_SIZE = 50;
  const MIN_FONT_SIZE = 10;

  const style = { fontSize: `${fontsize}px` };

  const getThemedClass = (className) => {
    if (theme == '"DARK"') return `${className} ${className}--dark`;
    return className;
  };

  return (
    <nav class={getThemedClass("nav")} style={style}>
      <div class={getThemedClass("logo")}>myDashboard.pl</div>
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
        <div class={getThemedClass("nav-item")}>Dashboard</div>
        <div class={getThemedClass("nav-item")}>Account settings</div>
        <div class={getThemedClass("nav-item")}>my</div>
      </section>
      <section class="section">
        <h5 style={style} class={getThemedClass("section-heading")}>
          Components{" "}
        </h5>
        <div class={getThemedClass("nav-item")}>Cards</div>
        <div class={getThemedClass("nav-item")}>user Interface</div>
      </section>
    </nav>
  );
}

export default SideNav;

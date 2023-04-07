import React, { useState, createContext, useContext } from "react";
import "./SideNav.css";

import { FontsizeContext } from "../../context";

function SideNav({ fontsize, setFontsize }) {
  const MAX_FONT_SIZE = 50;
  const MIN_FONT_SIZE = 10;

  const style = { fontSize: `${fontsize}px` };

  return (
    <nav class="nav">
      <div class="logo">myDashboard.pl</div>
      <section class="accesibility">
        <h5 class="section-heading" style={{ fontSize: `${fontsize}px` }}>
          Accesibility tools{" "}
        </h5>
        <button
          class="btn-item"
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
          class="btn-item"
          style={style}
          onClick={() => {
            if (fontsize * 1 <= MIN_FONT_SIZE) return;
            localStorage.setItem("fontsize", JSON.stringify(fontsize * 1 - 5));
            setFontsize(fontsize * 1 - 5);
          }}
        >
          - Decrease fontsize
        </button>
        {/* </FontsizeContext.Provider> */}
        <button class="btn-item">Darkmode</button>
      </section>
      <section class="section">
        <h5 class="section-heading">Pages </h5>
        <div class="nav-item">Dashboard</div>
        <div class="nav-item">Account settings</div>
        <div class="nav-item">my</div>
      </section>
      <section class="section">
        <h5 class="section-heading">Components </h5>
        <div class="nav-item">Cards</div>
        <div class="nav-item">user Interface</div>
      </section>
    </nav>
  );
}

export default SideNav;

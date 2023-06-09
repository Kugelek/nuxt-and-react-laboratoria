import React, { useState } from "react";
import BigTile from "../BigTile/BigTile";
import Searchbar from "../Searchbar/Searchbar";
import SideNav from "../SideNav/SideNav";
import "./MainPanel.css";

function MainPanel({ fontsize, setFontsize, theme, setTheme }) {
  const getThemedClass = (className) => {
    if (theme == '"DARK"') return `${className} ${className}--dark`;
    return className;
  };

  return (
    <div class={getThemedClass("main")}>
      <SideNav
        fontsize={fontsize}
        setFontsize={setFontsize}
        theme={theme}
        setTheme={setTheme}
      />
      <section class="right">
        <Searchbar fontsize={fontsize} theme={theme} />
        <BigTile heading="Some chart" isImage="true" theme={theme} />
        <BigTile
          theme={theme}
          heading="Lorem ipsum"
          description="eLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc erat, pharetra ut ultricies quis, tristique ut sapien. Suspendisse eget ipsum a purus volutpat fringilla et eget dui. Fusce sed nulla elit. Vivamus varius ullamcorper imperdiet. Donec egestas felis eget quam hendrerit, in accumsan est fringilla. Pellentesque sed suscipit dui, nec vulputate tellus. Morbi ut augue ut dolor pulvinar dapibus nec ac ex. Etiam maximus nisi sapien, id sodales nunc interdum at. Pellentesque ultricies pretium consectetur. Etiam hendrerit mi vel consectetur egestas. Suspendisse vitae maximus tellus, aliquam sagittis dui. Nullam at vestibulum nulla. Sed nisi magna, pretium et pretium vitae, vulputate a justo. "
        />
      </section>
    </div>
  );
}

export default MainPanel;

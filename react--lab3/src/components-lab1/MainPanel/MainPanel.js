import React, { useState } from "react";
import BigTile from "../BigTile/BigTile";
import Searchbar from "../Searchbar/Searchbar";
import SideNav from "../SideNav/SideNav";
import Login from "../Login/Login";
import "./MainPanel.css";
import { Switch, Route, Router, BrowserRouter, Routes } from "react-router-dom";
function MainPanel({ fontsize, setFontsize, theme, setTheme }) {
  const getThemedClass = (className) => {
    if (theme == '"DARK"') return `${className} ${className}--dark`;
    return className;
  };
  const [chatVisible, setChatVisible] = useState(false);

  return (
    <div class={getThemedClass("main")}>
      <BrowserRouter>
        <SideNav
          fontsize={fontsize}
          setFontsize={setFontsize}
          theme={theme}
          setTheme={setTheme}
        />
        <section class="right">
          <Searchbar fontsize={fontsize} theme={theme} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <BigTile heading="Some chart" isImage="true" theme={theme} />
                  <BigTile
                    theme={theme}
                    heading="Lorem ipsum"
                    description="eLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc erat, pharetra ut ultricies quis, tristique ut sapien. Suspendisse eget ipsum a purus volutpat fringilla et eget dui. Fusce sed nulla elit. Vivamus varius ullamcorper imperdiet. Donec egestas felis eget quam hendrerit, in accumsan est fringilla. Pellentesque sed suscipit dui, nec vulputate tellus. Morbi ut augue ut dolor pulvinar dapibus nec ac ex. Etiam maximus nisi sapien, id sodales nunc interdum at. Pellentesque ultricies pretium consectetur. Etiam hendrerit mi vel consectetur egestas. Suspendisse vitae maximus tellus, aliquam sagittis dui. Nullam at vestibulum nulla. Sed nisi magna, pretium et pretium vitae, vulputate a justo. "
                  />
                </>
              }
            ></Route>
            <Route
              path="/account-settings"
              element={
                <BigTile
                  heading="Account settings"
                  description="Account settings should be placed here"
                  isImage="false"
                  theme={theme}
                />
              }
            ></Route>
            <Route
              path="/my-posts"
              element={
                <BigTile
                  heading="My posts"
                  description="Here are my posts"
                  isImage="false"
                  theme={theme}
                />
              }
            ></Route>
            <Route
              path="/cards"
              element={
                <BigTile
                  heading="My cards"
                  description="My cards are placed here"
                  isImage="false"
                  theme={theme}
                />
              }
            ></Route>
            <Route
              path="/contact"
              element={
                <BigTile
                  heading="Contact me"
                  description="jan.kowalski3424234234@gmail.com"
                  isImage="false"
                  theme={theme}
                />
              }
            ></Route>
            <Route
              path="/contact"
              element={
                <BigTile
                  heading="Contact me"
                  description="jan.kowalski3424234234@gmail.com"
                  isImage="false"
                  theme={theme}
                />
              }
            ></Route>
            <Route
              path="/login"
              element={<Login heading="Login to the website" theme={theme} />}
            ></Route>
          </Routes>

          <div class="chat">
            <div class="chat-top" onClick={() => setChatVisible(!chatVisible)}>
              {chatVisible ? "Zamknij chat" : "Otworz Chat"}
            </div>
            {chatVisible && (
              <>
                {" "}
                <div class="chat-bottom"></div>
                <input class="chat-input" type="text"></input>
              </>
            )}
          </div>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default MainPanel;

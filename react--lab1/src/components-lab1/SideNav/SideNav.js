import React, { useState } from "react";
import "./SideNav.css";

function SideNav() {
  return (
    <nav class="nav">
      <div class="logo">myDashboard.pl</div>
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

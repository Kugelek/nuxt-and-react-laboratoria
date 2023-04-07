import React, { useState } from "react";

import "./BigTile.css";

function BigTile(props) {
  return (
    <div class="tile">
      <h1 class="heading">{props.heading}</h1>
      {!props.isImage && <p class="desc">{props.description}</p>}
      {props.isImage && (
        <img
          class="img"
          src="https://img.freepik.com/free-vector/modern-infographic-template-with-three-steps_1017-25390.jpg?w=996&t=st=1679847159~exp=1679847759~hmac=2b4c16c9789618e2894c14b4d4c999344b5290be65066878e3875f01ea48d346"
        />
      )}
    </div>
  );
}

export default BigTile;

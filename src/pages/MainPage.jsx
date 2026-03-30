import React, { useState, useEffect } from "react";

import "./MainPage.css";

const MainPage = () => {
  return (
    <div class="wrapper">
      <div class="section section-1">
        <div class="row">
          <div class="col col-left"></div>
          <div class="col col-right"></div>
        </div>
      </div>

      <div class="section section-2"></div>

      <div class="section section-3">
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
      </div>

      <div class="section section-4"></div>
    </div>
  );
};

export default MainPage;

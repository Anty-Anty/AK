import React, { useState, useEffect } from "react";

import "./MainPage.css";

const MainPage = () => {
  //WORKS//
  const [showAllApps, setShowAllApps] = useState(false);

  const apps = [
    { id: "1", title: "WaterPleaseApp»", description: "WaterPleaseApp»" },
    { id: "2", title: "ToDoApp»", description: "ToDoApp»" },
    { id: "3", title: "Delmaket»", description: "Delmaket»" },
    { id: "4", title: "app4", description: "app" },
    { id: "5", title: "app5", description: "app»" },
    { id: "6", title: "app6", description: "app»" },
  ];

  return (
    <div class="wrapper">
      {/* HEADER */}
      <div class="section header">
        <div class="row">
          <div class="col col-left"></div>
          <div class="col col-right"></div>
        </div>
      </div>

      {/* TECh STACK */}
      <div class="section tech-stack"></div>

      {/* GALLERY */}
      <div class="section app-gallery">
        <h3>Apps</h3>

        <div class="section app-gallery-stack">
          {(showAllApps ? apps : apps.slice(0, 3)).map((app) => (
            <div key={app.id} class="app-gallery-inner">
              <p onClick={() => setModalImage(app.title)}>{app.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            setShowAllApps((prev) => {
              return !prev;
            });
          }}
        >
          {showAllApps ? "Show all apps" : "Show less"}
        </button>
      </div>

      {/* EDUCATION */}
      <div class="section education"></div>
    </div>
  );
};

export default MainPage;

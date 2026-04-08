import React, { useState, useEffect } from "react";

import "./MainPage.css";

const MainPage = () => {
  //WORKS//
  const [showAllApps, setShowAllApps] = useState(false);

  const apps = [
    {
      id: "1",
      title: "WaterPleaseApp",
      frontend: "React + TypeScript",
      backend: "Node.js + Express + MongoDB",
      description:
        "A full-stack web application for managing indoor plants, visualizing their placement on a grid map, and tracking watering schedules.",
      img: "WaterPleaseApp",
      appLink: "https://waterpleaseapp.netlify.app",
      frontRepo: "https://github.com/Anty-Anty/WaterPleaseApp",
      backRepo: "https://github.com/Anty-Anty/WaterPleaseApp-backend",
    },
    {
      id: "2",
      title: "ToDoApp",
      frontend: "React",
      backend: "Node.js + Express + MongoDB",
      description:
        "A full-stack web application for managing personal tasks, featuring user authentication, protected routes, and persistent data storage.",
      img: "ToDoApp",
      appLink: "https://todoappoo.netlify.app/",
      frontRepo: "https://github.com/Anty-Anty/ToDoApp",
      backRepo: "https://github.com/Anty-Anty/ToDoApp-backend",
    },
    {
      id: "3",
      title: "Delmaket",
      frontend: "React",
      backend: "",
      description:
        "A clean, minimal portfolio website built for an architectural model studio.",
      img: "Delmaket",
      appLink: "https://anty-anty.github.io/delmaket/#/en",
      frontRepo: "https://github.com/Anty-Anty/delmaket",
    },
    {
      id: "4",
      title: "app4",
      frontend: "frontend",
      backend: "backend",
      description: "app",
      img: "image",
    },
    {
      id: "5",
      title: "app5",
      frontend: "frontend",
      backend: "backend",
      description: "app",
      img: "image",
    },
    {
      id: "6",
      title: "app6",
      frontend: "frontend",
      backend: "backend",
      description: "app",
      img: "image",
    },
  ];

  return (
    <div class="wrapper">
      {/* HEADER */}
      <div class="section header">
        {/* <div className="line_red"></div> */}
        {/* <hr className="line_red" /> */}
        <div class="row">
          <div class="col col-left">
            <h3>
              <span className="white">Hi, I'm Voo</span>
            </h3>
            <p>
              Frontend Engineer with background in ....
              <br />I love building full-stack apps in React.
            </p>
          </div>
          <div class="col col-right">
            <h3>
              <span className="white">Contacts</span>
            </h3>
            +1 xxx xxx xx xx
            <br />
            xxxxx.xxx@gmail.com
            <br />
            <a
              href="https://github.com/Anty-Anty"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button-contacts">GitHub link</button>
            </a>
            <br />
            <a
              href="https://linkedin.com/in/ant-kot"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button-contacts">LinkedIn link</button>
            </a>
          </div>
        </div>
      </div>

      {/* TECH STACK */}
      <div class="section tech-stack">
        {/* <div className="line_yellow"></div> */}
        {/* <hr className="line_yellow" /> */}
        <h3>
          <span className="white">Technical Skills</span>
        </h3>
        <p>
          Languages & Tools:
          <br />
          <strong>
            <span className="white">
              JavaScript (ES6+), TypeScript, HTML5, CSS3
            </span>
          </strong>
          <br />
          Frameworks / Libraries:
          <br />
          <strong>
            <span className="white">React, React Router, Vite </span>
          </strong>
          <br />
          State Management:
          <br />
          <strong>
            <span className="white">React Hooks, Context API</span>
          </strong>
          <br />
          Backend Exposure:
          <br />
          <strong>
            <span className="white">REST APIs, Node.js/Express, MongoDB</span>
          </strong>
          <br />
          UI Patterns:
          <br />
          <strong>
            <span className="white">
              Component composition, forms, modals, drag & drop, dynamic state
              syncing
            </span>
          </strong>
          <br />
          Other:
          <br />
          <strong>
            <span className="white">
              Git/GitHub, responsive design, performance optimization
            </span>
          </strong>
        </p>
      </div>

      {/* GALLERY */}
      <div class="section app-gallery">
        {/* <div className="line_blue"></div> */}
        {/* <hr className="line_blue" /> */}
        <h3>Apps</h3>

        <div class="app-gallery-stack">
          {(showAllApps ? apps : apps.slice(0, 3)).map((app) => (
            <div
              key={app.id}
              class="app-gallery-inner"
              onClick={() => setModalImage(app.title)}
            >
              <div className="app-gallery-inner-block1">
                <div className="section-light app-gallery-inner-title">
                  <div>
                    <h4>
                      <span className="white">{app.title}</span>
                    </h4>
                  </div>
                  <div>
                    <a href={app.appLink} target="_blank" rel="noreferrer">
                      <button className="button-app">View App</button>
                    </a>
                    <a
                      href="https://github.com/Anty-Anty"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="button-app">More info</button>
                    </a>
                  </div>
                </div>
                <div className="section-light app-gallery-inner-discription">
                  <p>{app.description}</p>
                </div>
              </div>
              <div className="app-gallery-inner-block2">
                <div className="app-gallery-inner-image">
                  <img
                    src={`${import.meta.env.BASE_URL}screenshots/${
                      app.img
                    }.webp`}
                    alt={app.img}
                    // loading="lazy"
                    // onClick={() => setModalImage(work.title)}
                    // className="app-gallery-img"
                  />
                </div>
                <div className="section-light app-gallery-inner-frontend">
                  <p>
                    Frontend:
                    <br /> {app.frontend}
                  </p>
                  <a href={app.frontRepo} target="_blank" rel="noreferrer">
                    <button className="button-app">View repo</button>
                  </a>
                </div>
                <div className="section-light app-gallery-inner-backend">
                  {app.backend ? (
                    <>
                      <p>
                        Backend: <br />
                        {app.backend}
                      </p>
                      <a href={app.backRepo} target="_blank" rel="noreferrer">
                        <button className="button-app">View repo</button>
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
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
          {showAllApps ? "Show less" : "Show all apps"}
        </button>
      </div>

      {/* EDUCATION */}
      <div class="section education">
        {/* <div className="line_green"></div> */}
        {/* <hr className="line_green" /> */}
      </div>
    </div>
  );
};

export default MainPage;

import React, { useState, useEffect } from "react";

import apps from "../data/apps";
import Modal from "../components/Modal";
import LoadingSpinner from "../components/LoadingSpinner";

import "./MainPage.css";

const MainPage = () => {
  //WORKS//
  const [showAllApps, setShowAllApps] = useState(false);

  //MODAL//
  const [modalImage, setModalImage] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const closeModalHandler = () => {
    setModalImage(null);
    setImages([]);
    setIsLoading(false); // stop spinner
  };

  const modalApp = apps.find((a) => a.title === modalImage);

  useEffect(() => {
    if (!modalApp) return;

    const found = [];
    let i = 1;
    setIsLoading(true); // start spinner

    const checkNext = () => {
      const testImg = new Image();
      testImg.src = `${
        import.meta.env.BASE_URL
      }screenshots/gallery/${modalImage}_${i}.webp`;

      testImg.onload = () => {
        found.push(`${modalImage}_${i}`);
        i++;
        checkNext(); // keep checking next file
      };

      testImg.onerror = () => {
        setImages(found); // stop when file missing
        setIsLoading(false); // stop spinner
      };
    };

    checkNext();
  }, [modalImage]);

  return (
    <div className="wrapper">
      {/* HEADER */}
      <div className="section header">
        {/* <div className="line_red"></div> */}
        {/* <hr className="line_red" /> */}
        <div className="row">
          <div className="col col-left">
            <h2>
              <span className="orange">Hi, I'm Anton</span>
            </h2>
            <p>
              Frontend Engineer with background in architecture.
              <br />I love building full-stack apps in React.
            </p>
          </div>
          <div className="col col-right">
            <h3>
              <span className="blue">Contacts</span>
            </h3>
            +1 236 979 41 21
            <br />
            anton.cxa@gmail.com
            <br />
            <a
              href="https://github.com/Anty-Anty"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="button-contacts orange">
                GitHub link
              </button>
            </a>
            <br />
            <a
              href="https://linkedin.com/in/ant-kot"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="button-contacts orange">
                LinkedIn link
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* TECH STACK */}
      <div className="section tech-stack">
        {/* <div className="line_yellow"></div> */}
        {/* <hr className="line_yellow" /> */}
        <h3>
          <span className="blue">Technical Skills</span>
        </h3>
        <p>
          Languages & Tools:
          <br />
          <strong>
            <span className="white">
              <span className="white chip">JavaScript (ES6+)</span> <span className="white chip">TypeScript</span> <span className="white chip">HTML5</span> <span className="white chip">CSS3</span>
            </span>
          </strong>
          <br />
          Frameworks / Libraries:
          <br />
          <strong>
            <span className="white chip">React</span> <span className="white chip">React Router</span> <span className="white chip">Vite</span>
          </strong>
          <br />
          State Management:
          <br />
          <strong>
            <span className="white chip">React Hooks</span> <span className="white chip">Context API</span>
          </strong>
          <br />
          Backend Exposure:
          <br />
          <strong>
            <span className="white chip">REST APIs</span> <span className="white chip">Node.js/Express</span> <span className="white chip">MongoDB</span>
          </strong>
          <br />
          UI Patterns:
          <br />
          <strong>
            <span className="white chip">
              Component composition</span> <span className="white chip">forms</span> <span className="white chip">modals</span> <span className="white chip">drag & drop</span> <span className="white chip">dynamic state
              syncing
            </span>
          </strong>
          <br />
          Other:
          <br />
          <strong>
            <span className="white">
              <span className="white chip">Git/GitHub</span> <span className="white chip">responsive design</span> <span className="white chip">performance optimization</span>
            </span>
          </strong>
        </p>
      </div>

      {/* GALLERY */}
      <div className="section app-gallery">
        {/* <div className="line_blue"></div> */}
        {/* <hr className="line_blue" /> */}
        <h3 className="blue">Apps</h3>

        <div className="app-gallery-stack">
          {(showAllApps ? apps : apps.slice(0, 3)).map((app) => (
            <div key={app.id} className="app-gallery-inner">
              <div className="app-gallery-inner-block1">
                <div className="section-light app-gallery-inner-title">
                  <div>
                    <h4>
                      <span className="orange">{app.title}</span>
                    </h4>
                  </div>
                  <div>
                    <a href={app.appLink} target="_blank" rel="noreferrer">
                      <button type="button" className="button-app b-highlight orange">
                        View App
                      </button>
                    </a>

                    <button
                      type="button"
                      className="button-app"
                      onClick={() => setModalImage(app.title)}
                    >
                      More info
                    </button>
                  </div>
                </div>
                <div className="section-light app-gallery-inner-discription">
                  <p>{app.description}</p>
                </div>
              </div>
              <div className="app-gallery-inner-block2">
                <div className="app-gallery-inner-image">
                  <picture>
                    {app.imgSmall && (
                      <source
                        srcSet={`${import.meta.env.BASE_URL}screenshots/${
                          app.imgSmall
                        }.webp`}
                        media="(max-width: 1100px)"
                      />
                    )}
                    <img
                      src={`${import.meta.env.BASE_URL}screenshots/${
                        app.img
                      }.webp`}
                      alt={app.img}
                    />
                  </picture>
                </div>
                <div className="section-light app-gallery-inner-frontend">
                  <p>
                    Frontend:
                    <br /> {app.frontend}
                  </p>
                  <a href={app.frontRepo} target="_blank" rel="noreferrer">
                    <button type="button" className="button-app">
                      View repo
                    </button>
                  </a>
                </div>
                <div className="section-light app-gallery-inner-backend">
                  {app.backend && (
                    <>
                      <p>
                        Backend: <br />
                        {app.backend}
                      </p>
                      <a href={app.backRepo} target="_blank" rel="noreferrer">
                        <button type="button" className="button-app">
                          View repo
                        </button>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
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
      <div className="section education">
        <h3>
          <span className="blue">Education & Training</span>
        </h3>
        <br />
        <h4>Self-directed Web Development Study (4+ years)</h4>
        <h4>Completed full courses while building real applications:</h4>
        <p>
          • The Complete Full-Stack Web Development Bootcamp — Dr. Angela Yu{" "}
          <br />
          • The Web Developer Bootcamp — Colt Steele
          <br />
          • The Ultimate React Course: React, Next.js, Redux & More — Jonas
          Schmedtmann
          <br />
          • React, NodeJS, Express & MongoDB: The MERN Fullstack Guide —
          Maximilian Schwarzmüller <br />• React & TypeScript: The Practical
          Guide — Maximilian Schwarzmüller <br />• React and Typescript: Build a
          Portfolio Project — Stephen Grider
        </p>
        <br />
        <h3>
          <span className="blue">Previous Career</span>
        </h3>
        <br />
        <h4>Architect / Architectural designer (9+ years)</h4>
        <p>
          • Worked in award-winning international architecture studios. <br />•
          Developed strong design sense, client communication skills, and
          expertise in complex project coordination — all of which translate
          directly into UI/UX thinking, structured problem solving, and
          collaborative engineering workflows.
        </p>
      </div>

      {/* MODAL */}
      {modalImage && (
        <button
          type="button"
          className="modal-close-btn"
          onClick={closeModalHandler}
        >
          ✖
        </button>
      )}

      <Modal show={modalImage} onCancel={closeModalHandler}>
        {isLoading ? (
          <LoadingSpinner asOverlay />
        ) : (
          <div className="modal-works">
            {/* APP DETAILS */}
            <div className="modal-details">
              <h2>{modalApp?.title}</h2>

              {modalApp?.details?.map((section, i) => (
                <div key={i} className="modal-section">
                  {section.title && (
                    <h3 className="margin10">
                      <span className="white">{section.title}</span>
                    </h3>
                  )}

                  {section.text && <p className="margin10">{section.text}</p>}
                  {section.status && (
                    <p className="margin10">{section.status}</p>
                  )}

                  {section.frontRepo && (
                    <div className="margin10">
                      <p>Frontend repository:</p>
                      <a
                        href={modalApp.frontRepo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {modalApp.frontRepo}
                      </a>
                    </div>
                  )}

                  {section.backRepo && (
                    <div className="margin10">
                      <p>Backend repository:</p>
                      <a
                        href={modalApp.backRepo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {modalApp.backRepo}
                      </a>
                    </div>
                  )}

                  {section.appLink && (
                    <div className="margin10">
                      <a
                        href={modalApp.appLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {modalApp.appLink}
                      </a>
                    </div>
                  )}

                  {section.coldStart && (
                    <p className="margin10">{section.coldStart}</p>
                  )}

                  {section.items && (
                    <ul>
                      {section.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.keyDec && (
                    <ul>
                      {section.keyDec.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.endpoints && (
                    <div className="margin10">
                      {section.endpoints.map((group, k) => (
                        <div key={k} className="endpoint-group">
                          {group.title && (
                            <p className="endpoint-title">{group.title}</p>
                          )}
                          <table className="endpoint-table">
                            <thead>
                              <tr>
                                <th>Method</th>
                                <th>Endpoint</th>
                                <th>Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {group.rows.map((row, j) => (
                                <tr key={j}>
                                  <td
                                    className={`method method-${row.method.toLowerCase()}`}
                                  >
                                    {row.method}
                                  </td>
                                  <td>
                                    <code>{row.endpoint}</code>
                                  </td>
                                  <td>{row.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* APP IMAGE GALLARY */}
            <div className="modal-img">
              <h3 className="margin10">Screenshots</h3>
              {images.map((imgName, i) => (
                <figure key={imgName}>
                <figcaption>{modalApp?.screenshots?.[i]}</figcaption>
                <img
                  key={imgName}
                  src={`${
                    import.meta.env.BASE_URL
                  }screenshots/gallery/${imgName}.webp`}
                  alt={imgName}
                  loading="lazy"
                  // If the image is less than 1000px wide,
                  // its max-width is set to 500px.
                  onLoad={(e) => {
                    if (e.target.naturalWidth < 1000) {
                      e.target.classList.add("img-small");
                    }
                  }}
                />
                </figure>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MainPage;

const apps = [
  {
    id: "1",
    title: "WaterPleaseApp",
    frontend: "React + TypeScript",
    backend: "Node.js + Express + MongoDB",
    description:
      "A full-stack web application for managing indoor plants, visualizing their placement on a grid map, and tracking watering schedules.",
    img: "WaterPleaseApp",
    imgSmall: "WaterPleaseApp_small",
    appLink: "https://waterpleaseapp.netlify.app",
    frontRepo: "https://github.com/Anty-Anty/WaterPleaseApp",
    backRepo: "https://github.com/Anty-Anty/WaterPleaseApp-backend",
    details: [
      {
        title: "",
        text: "A full-stack web application for managing indoor plants, visualizing their placement on a grid map, and tracking watering schedules.",
        frontRepo: true,
        backRepo: true,
      },
      {
        title: "Live demo",
        appLink: true,
      },
      {
        title: "Tech Stack",
        items: [
          "React (Vite)",
          "TypeScript",
          "Node.js",
          "Express",
          "MongoDB (Mongoose)",
          "REST API",
          "CSS Modules / Custom CSS",
          "Custom Hooks: useHttpClient, useForm",
          "Drag & Drop (custom implementation)",
          "express-validator",
          "MongoDB Transactions (Sessions)",
        ],
      },
      {
        title: "Why I Built This",
        text: "To practice full-stack React patterns, TypeScript, custom hooks, state synchronization with a backend, and real-world UI edge cases such as drag & drop and mobile date picker inconsistencies.",
      },
    ],
  },
  {
    id: "2",
    title: "ToDoApp",
    frontend: "React",
    backend: "Node.js + Express + MongoDB",
    description:
      "A full-stack web application for managing personal tasks, featuring user authentication, protected routes, and persistent data storage.",
    img: "ToDoApp",
    imgSmall: "ToDoApp_small",
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
    title: "CourseGoalsApp",
    frontend: "React + TypeScript",
    backend: "",
    description:
      "A small React + TypeScript application for creating, listing, and deleting personal course goals.",
    img: "CourseGoalsApp",
    appLink: "https://tsgoals.netlify.app/",
    frontRepo: "https://github.com/Anty-Anty/TS-goals",
  },
];

export default apps;

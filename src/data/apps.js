const apps = [
  {
    id: "1",
    title: "WaterPleaseApp",
    screenshots: [
      "Main Dashboard",
      "Add Plant Workflow",
      "Interactive Map Editor",
      "Mobile View",
    ],
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
        status: "Status: Complete — open to feedback and iteration",
        frontRepo: true,
        backRepo: true,
      },
      {
        title: "Live demo",
        appLink: true,
        coldStart:
          "⚠️ Cold start notice The backend is hosted on Render’s free tier. Initial load may take up to ~60 seconds due to server cold start.",
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

      {
        title: "What I Learned",
        text: "Building this end-to-end revealed how quickly derived state complexity compounds — keeping the map grid in sync with plant data across optimistic updates required careful hook design. I also ran into real mobile inconsistencies with date inputs that aren't covered in tutorials, which pushed me to handle them explicitly rather than assume browser defaults.",
      },
      {
        title: "Key Technical Decisions",
        keyDec: [
          "Drag & Drop Without External Libraries",
          "Grid-Based Map as Derived UI State",
          "Optimistic UI Updates for Better UX",
          "Mobile-Specific Date Picker Handling",
          "MongoDB Transactions for Data Integrity",
          "Custom Hooks for Separation of Concerns",
        ],
      },
      {
        title: "API Endpoints",
        endpoints: [
          {
            title: "🌱 Plants",
            rows: [
              {
                method: "GET",
                endpoint: "/api/plants",
                description: "Fetch all plants",
              },
              {
                method: "POST",
                endpoint: "/api/plants/createplant",
                description: "Create a new plant",
              },
              {
                method: "PATCH",
                endpoint: "/api/plants/:pid",
                description: "Update plant data or map position",
              },
              {
                method: "DELETE",
                endpoint: "/api/plants/:pid",
                description: "Delete plant and clean up map references",
              },
            ],
          },
          {
            title: "🗺️ Maps",
            rows: [
              {
                method: "GET",
                endpoint: "/api/maps",
                description: "Fetch map configuration",
              },
              {
                method: "PATCH",
                endpoint: "/api/maps/editmap",
                description: "Update active map squares",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    screenshots: [
      "Welcome / Landing page",
      "Authentication page",
      "To-Do list",
      "Add Item form",
      "Edit modal",
      "Mobile View / User settings",
    ],
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
    details: [
      {
        title: "",
        text: "ToDoApp is a full-stack web application for managing personal tasks, featuring user authentication, protected routes, and persistent data storage.",
        status: "Status: Complete — open to feedback and iteration",
        frontRepo: true,
        backRepo: true,
      },
      {
        title: "Live demo",
        appLink: true,
        coldStart:
          "⚠️ Cold start notice The backend is hosted on Render’s free tier. Initial load may take up to ~60 seconds due to server cold start.",
      },
      {
        title: "Demo Login & Authentication",
        text: "This app requires authentication. Reviewers can quickly create an account using a test email. No email verification is required. To explore the app without creating an account, use the demo credentials:",
        status: "Email: test1@test.com Password: 111111",
      },
      {
        title: "Tech Stack",
        items: [
          "React (Vite)",
          "Node.js",
          "Express",
          "MongoDB (Mongoose)",
          "REST API",
          "JWT authentication",
          "CSS Modules / Custom CSS",
          "Custom Hooks: useHttpClient, useForm",
          "express-validator",
          "MongoDB Transactions (Sessions)",
        ],
      },
      {
        title: "Why I Built This",
        text: "I built this full-stack app to practice real-world React architecture and backend API design, focusing on authentication, protected routing, user-specific content, and persistent sessions. The backend emphasizes secure data access, clean separation of concerns, reliable error handling, and consistent, transaction-safe updates with MongoDB and Mongoose.",
      },

      {
        title: "What I Learned",
        text: "Implementing JWT end-to-end was more nuanced than I expected — handling token expiry, protecting routes on both client and server, and ensuring user-scoped queries don't leak data between accounts required thinking about security at every layer, not just at login.",
      },
      {
        title: "Key Technical Decisions",
        keyDec: [
          "JWT Authentication with protected routes and user-scoped data access",
          "MongoDB Transactions for consistent multi-document updates",
          "Custom useHttpClient and useForm hooks to centralize async logic and validation",
          "express-validator for server-side input sanitization",
          "Persistent sessions with secure token storage",
        ],
      },
      {
        title: "API Endpoints",
        endpoints: [
          {
            title: "Auth",
            rows: [
              {
                method: "POST",
                endpoint: "/api/users/signup",
                description: "Register a new user",
              },
              {
                method: "POST",
                endpoint: "/api/users/login",
                description: "Log in and receive a JWT token",
              },
            ],
          },
          {
            title: "Items (JWT required)",
            rows: [
              {
                method: "GET",
                endpoint: "/api/items/user/:uid",
                description: "Fetch all items belonging to a specific user",
              },
              {
                method: "POST",
                endpoint: "/api/items",
                description: "Create a new item",
              },
              {
                method: "PATCH",
                endpoint: "	/api/items/:iid",
                description: "Update an existing item",
              },
              {
                method: "DELETE",
                endpoint: "/api/items/:iid",
                description: "Delete an item",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    screenshots: [
      "Landing page",
      "Portfolio Gallery",
      "Image Viewer Modal",
      "Mobile View",
    ],
    title: "Delmaket",
    frontend: "React",
    backend: "",
    description:
      "A clean, minimal portfolio website built for an architectural model studio.",
    img: "Delmaket",
    appLink: "https://anty-anty.github.io/delmaket/#/en",
    frontRepo: "https://github.com/Anty-Anty/delmaket",
    details: [
      {
        title: "",
        text: "A production React website built for a real architectural model studio, showcasing its portfolio, services, and contact information through a scroll-based, image-heavy layout. Fully frontend-driven with no backend — optimized for fast loading and deployed to GitHub Pages.",
        status: "Status: Complete — open to feedback and iteration",
        frontRepo: true,
      },
      {
        title: "Live demo",
        appLink: true,
      },
      {
        title: "Tech Stack",
        items: [
          "React (Vite)",
          "Node.js",
          "React Router (HashRouter)",
          "Custom CSS",
          "Native browser APIs",
          "Lazy loading & responsive images",
        ],
      },
      {
        title: "Why I Built This",
        text: "This project was built to deliver a production-ready frontend for a real client while practicing component-driven UI architecture, scroll-based navigation and layout behavior, performance optimization for image-heavy content, modal and gallery UX patterns, and multilingual routing without a backend.",
      },

      {
        title: "What I Learned",
        text: "Delivering for a real client meant prioritizing reliability and clarity over technical experimentation. I learned that HashRouter behavior on GitHub Pages subdirectory deployments isn't intuitive — getting multilingual routing and asset paths to resolve correctly required understanding how the browser handles hash-based URLs versus the assumptions Vite makes during the build.",
      },
      {
        title: "Key Technical Decisions",
        keyDec: [
          "Hash-Based Routing for Static Hosting",
          "Scroll-Based Navigation (Single-Page UX)",
          "Responsive Image Strategy",
          "Dynamic Gallery Loading",
          "Modal-Based Image Viewer",
          "UI State Derived from Browser Events",
        ],
      },
    ],
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
    details: [
      {
        title: "",
        text: "A small React + TypeScript application for creating, listing, and deleting personal course goals. Built as a practice project to explore typed components, prop models, state updates, and component composition.",
        status: "Status: Complete — open to feedback and iteration",
        frontRepo: true,
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
          "React Hooks: useState, useRef",
          "Component-based architecture",
          "Basic CSS styling (optional modules/styles)",
        ],
      },
      {
        title: "Why I Built This",
        text: "I built this app to practice using TypeScript in a real React workflow, focusing on strongly typed props and reusable interfaces, defining union and custom types for component models (e.g., CourseGoalType), managing state updates safely, structuring logic across smaller components, passing properly typed callback functions (such as delete handlers), and handling forms with useRef and typed events like SubmitEvent.",
      },
      {
        title: "Key Technical Decisions",
        keyDec: [
          "Typed Goal Model",
          "Controlled Data Flow",
          "Ref-based Form Handling",
          "Reusable UI Components",
        ],
      },
    ],
  },
];

export default apps;

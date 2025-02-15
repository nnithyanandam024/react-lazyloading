import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

// Lazy-loaded pages
const Home = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Home")), 2000) // Simulates a 2-second delay
  )
);
const Page1 = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Page1")), 2000) // Simulates a 2-second delay
  )
);
const Page2 = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Page2")), 2000) // Simulates a 2-second delay
  )
);
const Page3 = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Page3")), 2000) // Simulates a 2-second delay
  )
);
const Page4 = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Page4")), 2000) // Simulates a 2-second delay
  )
);
const Page5 = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Page5")), 2000) // Simulates a 2-second delay
  )
);
const Page6 = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Page6")), 2000) // Simulates a 2-second delay
  )
);
const Page7 = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Page7")), 2000) // Simulates a 2-second delay
  )
);
const Page8 = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Page8")), 2000) // Simulates a 2-second delay
  )
);
const Page9 = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Page9")), 2000) // Simulates a 2-second delay
  )
);
const Page10 = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Page10")), 2000) // Simulates a 2-second delay
  )
);

const pages = [
  { path: "/page1", component: Page1 },
  { path: "/page2", component: Page2 },
  { path: "/page3", component: Page3 },
  { path: "/page4", component: Page4 },
  { path: "/page5", component: Page5 },
  { path: "/page6", component: Page6 },
  { path: "/page7", component: Page7 },
  { path: "/page8", component: Page8 },
  { path: "/page9", component: Page9 },
  { path: "/page10", component: Page10 },
];

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

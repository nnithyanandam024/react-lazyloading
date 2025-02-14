import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ReloadButton from "./Reloadpage";
import "./App.css";


const Home = lazy(() => import("./pages/Home"));
const Page1 = lazy(() => import("./pages/Page1"));
const Page2 = lazy(() => import("./pages/Page2"));
const Page3 = lazy(() => import("./pages/Page3"));
const Page4 = lazy(() => import("./pages/Page4"));
const Page5 = lazy(() => import("./pages/Page5"));
const Page6 = lazy(() => import("./pages/Page6"));
const Page7 = lazy(() => import("./pages/Page7"));
const Page8 = lazy(() => import("./pages/Page8"));
const Page9 = lazy(() => import("./pages/Page9"));
const Page10 = lazy(() => import("./pages/Page10"));  

const App = () => {
  return (
    <Router>
       <Navbar />
      <Suspense fallback={<div className="text">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />
        </Routes>
      </Suspense>
      <ReloadButton />
    </Router>
  );
};

export default App;

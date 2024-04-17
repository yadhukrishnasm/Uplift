import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import Welcome from "./pages/welcome.jsx";
import SignIn from "./pages/signin.jsx";
import Skills from "./pages/skills.jsx";
import Events from "./pages/events.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Discover from "./pages/discover.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/d">
          <Route path="discover" element={<Discover />} />
          <Route path="events" element={<Events />} />
          <Route path="profile" />
        </Route>
        <Route path="event" />
        <Route path="event/new" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

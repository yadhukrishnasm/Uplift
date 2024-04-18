import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import Welcome from "./pages/welcome.jsx";
import SignIn from "./pages/signin.jsx";
import Skills from "./pages/skills.jsx";
import Events from "./pages/events.jsx";
import Profile from "./pages/profile.jsx";
import EventPage from "./pages/eventPage.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import CreateEvent from "./pages/createEvent.jsx";
import Discover from "./pages/discover.jsx";
import ManageEvents from "./pages/manageEvents.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/d" element={<Layout />}>
          <Route path="discover" element={<Discover />} />
          <Route path="events" element={<Events />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="event" element={<EventPage />} />
        <Route path="event/new" element={<CreateEvent />} />
        <Route path="/manage" element={<ManageEvents/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

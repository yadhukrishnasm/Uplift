import { useMatch, useResolvedPath } from "react-router-dom";
import Discover from "../assets/discover.svg";
import Events from "../assets/events.svg";
import Profile from "../assets/profile.svg";

export default function NavBar() {
  return (
    <div>
      <Tab to="discover" icon={Discover} />
      <Tab to="events" icon={Events} />
      <Tab to="profile" icon={Profile} />
    </div>
  );
}

function Tab({ to, icon, name, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div>
      <div className="absolute bottom-0 w-full h-fit mx-2">
        <img src={icon} />
      </div>
      {name}
    </div>
  );
}

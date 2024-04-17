import { useMatch, useResolvedPath } from "react-router-dom";
import Discover from "../assets/discover.svg";
import Events from "../assets/events.svg";
import Profile from "../assets/profile.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="fixed bg-green-100 bottom-0 w-full h-fit py-2 align-middle border-2 rounded-sm">
      <div className="flex w-4/6 justify-between mx-auto">
        <Tab to="discover" icon={Discover} name="discover" />
        <Tab to="events" icon={Events} name="events" />
        <Tab to="profile" icon={Profile} name="profile" />
      </div>
    </div>
  );
}

function Tab({ to, icon, name, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const classes = isActive ? "bg-[#ACD293] rounded-full" : "";

  return (
    <Link to={to} className="col col-span-1 justify-center">
      <div className={`w-10 justify-items-center ${classes}`}>
        <img src={icon} />
      </div>
      <span className="text-[12px]">{name}</span>
    </Link>
  );
}

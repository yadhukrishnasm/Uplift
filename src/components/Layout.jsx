import { Outlet } from "react-router-dom";
import NavBar from "./NavBar"; // Assuming NavBar is in the same directory

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

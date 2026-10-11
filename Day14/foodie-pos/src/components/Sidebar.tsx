import { Link } from "react-router-dom";
import "./Sidebar.css";
export function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={"/menu-categories"} className="sidebar-item">
        Menu Categories
      </Link>
      <Link to={"/menus"} className="sidebar-item">
        Menus
      </Link>
      <Link to={"/addon-categories"} className="sidebar-item">
        Addon Categories
      </Link>
      <Link to={"/addons"} className="sidebar-item">
        Addon
      </Link>
      <Link to={"/tables"} className="sidebar-item">
        Tables
      </Link>
      <Link to={"/locations"} className="sidebar-item">
        Locations
      </Link>
      <Link to={"/settings"} className="sidebar-item">
        Setting
      </Link>
    </div>
  );
}

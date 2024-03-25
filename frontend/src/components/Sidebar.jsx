import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useAuthContext } from "../context/AuthContext";

function Sidebar() {
  const { authUser } = useAuthContext();

  return (
    <aside>
      <nav className="side-bar">
        <Link to="/" className="flex justify-center">
          GitHub
        </Link>
        <Link to="/">Home</Link>
        {authUser && <Link to="/likes">Likes</Link>}

        {!authUser && <Link to="/login">Login</Link>}

        {!authUser && <Link to="/signup">Signup</Link>}

        {authUser && (
          <div>
            <Logout />
          </div>
        )}
      </nav>
    </aside>
  );
}

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
    </div>
  );
}

export default App;

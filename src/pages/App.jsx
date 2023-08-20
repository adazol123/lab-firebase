import { useState, createElement } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import BaseLayout from "../components/layouts/BaseLayout";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <BaseLayout>
      <div className="flex gap-2 items-center min-h-screen ">
        <button onClick={() => setToggle(!toggle)}>Toggle Mobile</button>

        {toggle
          ? createElement(Link, { to: "/profile" }, "Profile")
          : createElement(Link, { to: "/mobile" }, "Mobile")}
      </div>
    </BaseLayout>
  );
}

export default App;

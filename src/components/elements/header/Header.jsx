import React from "react";
import { IconBell, IconUserPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="sticky top-0 bg-gray-900 w-full min-h-[48px] flex items-center px-6 justify-between">
      <span>Supafaya</span>
      <div className="flex gap-2 items-center">
        <button data-type="icon">
          <IconBell size={16} stroke={1} />
        </button>
        <Link to="/admin" replace >
          <button data-type="icon" className="flex gap-2 items-center text-xs">
            <IconUserPin size={16} stroke={1} />
            <span>ADMIN</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

import { IconBell } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    //<div className=" sticky top-0">
    <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 w-full  min-h-[--nav-height] px-6 flex items-center my-auto justify-between drop-shadow-lg drop shadow-green-400">
      <div className="flex gap-x-4 text-xs">
        <span>Admin Header here [admin]</span>
        <span>Admin Header here [admin]</span>
      </div>
      <div className="flex gap-x-4 items-center">
        <Link to='/' replace className="rounded-4  px-4 text-xs">Go to Supafaya </Link>
        <button className="rounded-4 p-2">
          <IconBell stroke={1} size={16} />
        </button>
        <button className="rounded-4 p-2">
          <IconUserCircle stroke={1} size={16} />
        </button>
      </div>
    </div>
    //</div>
  );
}

export default AdminHeader;

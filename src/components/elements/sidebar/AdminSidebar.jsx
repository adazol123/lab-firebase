import { Icon3dCubeSphere } from "@tabler/icons-react";
import { IconShoppingBag } from "@tabler/icons-react";
import { IconLayoutDashboard } from "@tabler/icons-react";
import { IconNewSection } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import { IconActivity } from "@tabler/icons-react";
import { IconChevronLeft } from "@tabler/icons-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const navigate = useNavigate();

  const menu = [
    {
      label: "Dashboard",
      path: "dashboard",
      icon: IconLayoutDashboard,
    },
    {
      label: "Home",
      path: "home",
      icon: IconActivity,
    },
    {
      label: "Market",
      path: "market",
      icon: IconShoppingBag,
    },
    {
      label: "Guide",
      path: "guide",
      icon: IconNewSection,
    },
    {
      title: "Finance",
      isHeader: true,
      children: [
        {
          label: "Payout Release",
          path: "payout",
          icon: IconNewSection,
          isParent: true,
          children: [
            {
              label: "Payout Release",
              path: "payout",
              icon: IconNewSection,
            },
          ],
        },
        { label: "Checkout", path: "market", icon: IconNewSection },
      ],
    },
  ];
  return (
    <div
      className={`${
        isOpen ? "w-72" : "w-20"
      } transition-all duration-400 h-screen bg-zinc-900 relative pt-7 px-5 z-10`}
    >
      <button
        title={isOpen ? "Collapse" : "Expand"}
        className={`transition-transform duration-400 absolute cursor-pointer rounded-full -right-3 top-4 border-2 border-zinc-900 p-1 hover:bg-gray-200 bg-gray-200 text-zinc-900 hover:text-gray-800 focus:outline-none
        ${isOpen ? "rotate-0" : "rotate-180"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconChevronLeft size={12} stroke={4} />
      </button>
      <div className="flex gap-4 items-center cursor-pointer hover:text-green-500">
        <div>
          <Icon3dCubeSphere size={40} />
        </div>
        <h1
          className={`origin-left font-medium text-xl duration-300 ${
            !isOpen && "scale-0 translate-x-14 select-none opacity-0"
          }`}
        >
          Admin
        </h1>
      </div>

      <ul className="pt-6 flex flex-col gap-1">
        {menu.map((item) => {
          if (item.isHeader) {
            return (
              <React.Fragment key={item.title}>
                <li className="my-2 flex flex-col gap-1">
                  {isOpen ? (
                    <h2 className="mb-2 text-xs text-zinc-400">{item.title}</h2>
                  ) : (
                    <hr className="my-4 border-zinc-800" />
                  )}
                  {item.children.map((child) => {
                    return (
                      <React.Fragment key={child.label}>
                        <NavLink
                          className="text-gray-400 text-sm flex gap-x-4 items-center justify-between w-full cursor-pointer p-2 hover:bg-zinc-800 rounded overflow-hidden hover:text-green-300 aria-[current=page]:text-gray-100 aria-[current=page]:bg-zinc-800/90"
                          to={child.path}
                          replace
                          relative="route"
                          title={!isOpen && `${item.title}: ${child.label}`}
                        >
                          <div className="flex gap-x-4">
                            {React.createElement(child.icon, {
                              size: 24,
                              stroke: 1,
                            })}
                            <span
                              className={`transition-transform duration-300 whitespace-pre ${
                                !isOpen && `scale-0 translate-x-2 hidden`
                              }`}
                            >
                              {child.label}
                            </span>
                          </div>
                          {child.isParent && child.children.length ? (
                            <IconChevronRight size={16} />
                          ) : null}
                        </NavLink>
                      </React.Fragment>
                    );
                  })}
                </li>
              </React.Fragment>
            );
          } else {
            return (
              <li key={item.label} title={!isOpen && item.label}>
                <NavLink
                  className="transition-transform duration-700 text-gray-400 text-sm flex gap-x-4 items-center cursor-pointer p-2 hover:bg-zinc-800 rounded overflow-hidden hover:text-green-300 aria-[current=page]:text-gray-100 aria-[current=page]:bg-zinc-800/90 before:h-6 before:w-0 aria-[current=page]:before:w-[3px]  before:opacity-0 aria-[current=page]:before:h-4 aria-[current=page]:before:bg-green-400 before:absolute aria-[current=page]:before:rounded-tr-full aria-[current=page]:before:rounded-br-full aria-[current=page]:before:left-0 aria-[current=page]:before:opacity-100 relative"
                  to={item.path}
                  replace
                  relative="route"
                  title={!isOpen && item.label}
                >
                  {/*<div className="w-[4px] h-6 bg-green-400 absolute left-0 rounded-tr-full rounded-br-full" />*/}
                  <div>
                    {React.createElement(item.icon, { size: 24, stroke: 1 })}
                  </div>
                  <h3
                    className={`transition-transform duration-300  whitespace-nowrap ${
                      !isOpen && `scale-0 translate-x-4 opacity-50 hidden`
                    }`}
                  >
                    {item.label}
                  </h3>
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default AdminSidebar;

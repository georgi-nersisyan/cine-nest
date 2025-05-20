'use client'

import React, { useState } from "react";
import { MenuItem } from "./menu-items";
import NavItem from "./nav-item";
import { IoMenuOutline } from "react-icons/io5";

interface NavItemsProps {
  menuItems: MenuItem[];
}

export default function Nav({ menuItems }: NavItemsProps) {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  }

  return (
    <nav>
      <ul className="hidden md:flex">
        {menuItems.map((item: MenuItem) => {
          return <NavItem key={"menu-item" + item.id} menuItem={item} />;
        })}
      </ul>

      <div className="flex flex-col gap-5 releative md:hidden">
        <IoMenuOutline color="white" size={40} onClick={handleMenu} />

        <ul className={`w-full absolute top-20 bg-background p-2 right-0 ${isMenu ? "block" : "hidden"}`}>
          {menuItems.map((item: MenuItem) => {
            return <NavItem key={"menu-item" + item.id} menuItem={item} />;
          })}
        </ul>
      </div>
    </nav>
  );
}

'use client'

import React from "react";
import { MenuItem } from "./menu-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface Props {
  menuItem:MenuItem;
}

export default function NavItem({ menuItem }: Props) {
  const pathname = usePathname();
  const isActive = pathname === menuItem.slug;

  return (
    <li
      className={
        "relative group min-w-25 flex items-center justify-center transition-all " +
        (isActive ? "text-stardartColor" : "text-white hover:text-stardartColor")
      }
    >
      <Link href={menuItem.slug}>{menuItem.title}</Link>

      {menuItem.submenu && (
        <ul className="absolute hidden group-hover:block bg-gray-600 w-40 top-full">
          {menuItem.submenu.map((elm) => (
            <li
              key={elm.slug}
              className="h-11 flex items-center justify-center"
            >
              <Link href={elm.slug}>{elm.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

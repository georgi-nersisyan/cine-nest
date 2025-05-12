import React from 'react'
import { MenuItem } from './menu-items';
import NavItem from './nav-item';

interface NavItemsProps {
    menuItems:MenuItem[];
}

export default function Nav({menuItems}:NavItemsProps) {
  return (
    <nav>
        <ul className='flex'>
        {
            menuItems.map((item:MenuItem) => {
                return <NavItem key={"menu-item"+item.id} menuItem={item} />
            })
        }
        </ul>
    </nav>
  )
}

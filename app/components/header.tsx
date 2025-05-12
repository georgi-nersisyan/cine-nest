import React from 'react'
import Container from './container'
import Nav from './nav'
import Image from 'next/image'
import { menuItems } from './menu-items'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-full sticky top-0 backdrop-blur-lg z-50'>
        <Container className='w-full flex items-center justify-between p-2'>
            <Link href="/"><Image src="/images/logo.png" alt='logo' width={70} height={70} className='object-contain' /></Link>

            <Nav menuItems={menuItems} />
        </Container>    
    </header>
  )
}
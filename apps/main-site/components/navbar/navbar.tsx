import React, { type FC } from 'react'
import NavbarLink from './navbar-link'
import ChangeTheme from './change-theme'
import Image from 'next/image'

import styles from './navbar.module.css'

const Navbar: FC = () => {
  return (
    <nav className={styles.root}>
      <Image src={'/logo.svg'} alt='Logo' width={180} height={90} />
      <NavbarLink href='/'>Home</NavbarLink>
      <NavbarLink href='/about'>About</NavbarLink>
      <NavbarLink href='/projects'>Projects</NavbarLink>
      <NavbarLink href='/design'>Design</NavbarLink>
      <ChangeTheme />
    </nav>
  )
}

export default Navbar

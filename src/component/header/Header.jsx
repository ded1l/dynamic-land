import React from 'react'
import styles from './header.module.css'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Header = () => {
  return (
 
        
<div className={styles.main}>

        <Navbar  position="static" style={{borderBottom:'0.8px solid #000'}} >
      <NavbarBrand>
        {/* website h1 logo  */}
        <NavbarBrand>
                        <h1 >LALALAND</h1>
                    </NavbarBrand>
        
        
        
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            about
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            log out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar >


        

    </div>
        
  )
}

export default Header
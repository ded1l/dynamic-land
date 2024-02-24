import React from 'react'
import styles from './header.module.css'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Header = () => {
  return (
 
        
//  position="sticky" style={{borderBottom:'0.8px solid #000', margin:'0 0 0.8em 0', fontSize :'1em' }}

        <Navbar className=' font  m-2vh' >
      <NavbarBrand>
        {/* website h1 logo  */}
        <NavbarBrand>
                     <Link href=''  >  <h1  className='font-bold text-xl' >Nebula</h1></Link> 
                    </NavbarBrand> 
        
        
        
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      
        <NavbarItem >
          <Link href="#" aria-current="page">
            home
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link color="foreground" href="#">
          about
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


        

    
        
  )
}

export default Header
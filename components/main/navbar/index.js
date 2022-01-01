import React from 'react'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap'

import NavButton from '../subs/navButton'

import { Container, TopBar, BottomBar } from './style'

const navOptions = [
  {
    label: "Shop",
    title: "Evolv Online Store for Climbing and Bouldering Gear",
    path: "/shop",
    icon: ''
  },
  {
    label: "Team Evolv",
    title: "Team Evolv",
    path: "/team-evolv",
    icon: ''
  },
  {
    label: "Home",
    title: "Rock Climbing and Bouldering Gear",
    path: "/",
    icon: ''
  },
  // {
  //   label: "Resole",
  //   title: "Evolv Pro Shop | Evolv USA",
  //   path: "https://www.yosemitebum.com/",
  //   icon: ''
  // },
  {
    label: "Retail Store",
    title: "Evolv Pro Shop | Evolv USA",
    path: "/evolv-pro-shop",
    icon: ''
  },
  {
    label: "About Us",
    title: "About Us | Evolv USA",
    path: "/about-us",
    icon: ''
  }
]

// is all this stuff even necessary, can i customize it completely for myself
export const NavigationBar = () => {
    
    return (
        <Container>
            <TopBar>      
            
            </TopBar>
            <BottomBar>
                { navOptions.map( button => <NavButton options={button} />) }
            </BottomBar>
        </Container>
    )
}
{/* <Form className="form-center">
<FormControl type="text" placeholder="Search" className="" />
</Form> */}

export default NavigationBar